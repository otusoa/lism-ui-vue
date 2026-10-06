<script setup lang="ts">
import { computed, normalizeClass, normalizeStyle, toRaw, useAttrs, type StyleValue } from 'vue'
import DOMPurify from 'isomorphic-dompurify'
import Lism from '../Lism/Lism.vue'
import { getLismPropsVue } from '../../core/lism-adapter'
import type { IconProps } from '../../core/types'

/**
 * LismCSSのa--iconを使い、Vueコンポーネント・SVG文字列・slot・画像を表示します。
 * SVG文字列はブラウザー・SSRともDOMPurifyでサニタイズして描画します。
 *
 * @example
 * <LismIcon :icon="MyIcon" label="メニュー" />
 * <LismIcon :icon="{ as: MyIcon, weight: 'bold' }" fz="2xl" />
 * <LismIcon viewBox="0 0 24 24" size="2em"><path d="..." /></LismIcon>
 */
interface Props extends /* @vue-ignore */ IconProps {
  as?: IconProps['as']
  exProps?: IconProps['exProps']
  icon?: IconProps['icon']
  label?: IconProps['label']
  size?: IconProps['size']
  viewBox?: IconProps['viewBox']
  width?: IconProps['width']
  height?: IconProps['height']
  strokeWidth?: IconProps['strokeWidth']
  src?: IconProps['src']
  alt?: IconProps['alt']
}

defineOptions({ inheritAttrs: false })
defineSlots<{ default?: () => unknown }>()
const props = defineProps<Props>()
const attrs = useAttrs()

// ルート属性も含めてサニタイズし、SVGと同じ名前空間で内容を取り出す。
const parseSvg = (markup: string) => {
  const fragment = DOMPurify.sanitize(markup, {
    USE_PROFILES: { svg: true, svgFilters: true },
    ADD_TAGS: ['use'],
    FORBID_TAGS: ['style', 'foreignObject'],
    RETURN_DOM_FRAGMENT: true,
  })
  const svg = fragment.firstElementChild
  if (
    fragment.children.length !== 1 ||
    svg?.localName !== 'svg' ||
    svg.namespaceURI !== 'http://www.w3.org/2000/svg'
  )
    return undefined

  // useは同じSVG内の参照だけ許可し、外部SVGの読み込みを防ぐ。
  for (const use of svg.querySelectorAll('use')) {
    for (const name of ['href', 'xlink:href']) {
      const value = use.getAttribute(name)
      if (value !== null && !value.startsWith('#')) use.removeAttribute(name)
    }
  }

  return {
    attributes: Object.fromEntries(Array.from(svg.attributes, ({ name, value }) => [name, value])),
    content: svg.innerHTML,
  }
}

// VueコンポーネントにはcamelCase、ネイティブSVGにはSVGの属性名で渡す。
const svgAttributeNames: Record<string, string> = {
  strokeWidth: 'stroke-width',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeOpacity: 'stroke-opacity',
  fillRule: 'fill-rule',
  fillOpacity: 'fill-opacity',
  clipRule: 'clip-rule',
  vectorEffect: 'vector-effect',
}

const nativeSvgAttrs = (input: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(input).map(([key, value]) => [svgAttributeNames[key] ?? key, value]),
  )

const iconData = computed(() => {
  const {
    as,
    icon,
    label,
    size,
    exProps,
    class: userClass,
    className,
    style,
    ...rest
  } = { ...props, ...attrs } as IconProps & Record<string, unknown>

  let component = as || 'svg'
  let iconAttrs: Record<string, unknown> = {}
  let content: string | undefined

  if (rest.src) {
    component = 'img'
  } else if (typeof icon === 'string') {
    const svg = parseSvg(icon)
    if (svg) {
      component = 'svg'
      iconAttrs = svg.attributes
      content = svg.content
    }
  } else if (icon && typeof icon === 'object' && 'as' in icon && icon.as) {
    const { as: iconComponent, ...extra } = icon
    component = iconComponent
    iconAttrs = extra
  } else if (icon) {
    component = icon
  }

  const { class: iconClass, className: iconClassName, style: iconStyle, ...extraAttrs } = iconAttrs
  const svg = component === 'svg'
  const additionalProps = svg ? nativeSvgAttrs(extraAttrs) : extraAttrs
  const forwarded = svg ? nativeSvgAttrs(rest) : rest

  // iconオブジェクト・SVG文字列より直接指定した値を優先し、exPropsを最後に適用する。
  for (const key of Object.keys(additionalProps)) {
    if (forwarded[key] !== undefined) additionalProps[key] = forwarded[key]
  }
  Object.assign(additionalProps, svg ? nativeSvgAttrs(exProps ?? {}) : exProps)

  if (svg) {
    additionalProps.width ??= rest.width ?? size ?? '1em'
    additionalProps.height ??= rest.height ?? size ?? '1em'
    // アダプターのkebab→camel変換を通さず、SVGの属性名を維持する。
    for (const key of [...Object.keys(svgAttributeNames), ...Object.values(svgAttributeNames)]) {
      if (rest[key] !== undefined) {
        const nativeName = svgAttributeNames[key] ?? key
        additionalProps[nativeName] ??= rest[key]
        delete rest[key]
      }
    }
  } else if (typeof component !== 'string' && size !== undefined) {
    additionalProps.size = exProps?.size ?? size
  }

  if (typeof component === 'string') {
    delete rest.weight
    delete additionalProps.weight
  }

  if (label) {
    additionalProps['aria-label'] = label
    additionalProps.role = 'img'
    additionalProps['aria-hidden'] = undefined
  } else {
    additionalProps['aria-hidden'] = 'true'
  }

  const lismProps = {
    ...rest,
    class: normalizeClass([iconClass, iconClassName, userClass, className]),
    style: normalizeStyle([iconStyle as StyleValue, style as StyleValue]),
  }

  return {
    lismProps: {
      ...lismProps,
      as: typeof component === 'object' ? toRaw(component) : component,
      exProps: additionalProps,
    },
    // 動的SVG要素に渡し、SSRでもSVG属性の大文字・小文字とinnerHTMLを維持する。
    svgProps:
      content === undefined
        ? undefined
        : {
            ...getLismPropsVue({ ...lismProps, atomic: 'icon' }),
            ...additionalProps,
          },
    content,
  }
})
</script>

<template>
  <component
    :is="'svg'"
    v-if="iconData.content !== undefined"
    v-bind="iconData.svgProps"
    :innerHTML="iconData.content"
  />
  <Lism v-else v-bind="iconData.lismProps" atomic="icon">
    <slot />
  </Lism>
</template>
