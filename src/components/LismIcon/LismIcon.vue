<script setup lang="ts">
import { computed, useAttrs, type Component } from 'vue'
import Lism from '../Lism/Lism.vue'
import type { IconProps, LismProps } from '../../core/types'
import { phIcons, logoIcons } from 'lism-css/react/atomic/Icon/presets'

/**
 * LismIcon コンポーネント
 *
 * アイコンを表示するためのコンポーネントです。デフォルトで `a--icon` クラスが付与されます。
 * プリセットアイコン、外部コンポーネント、SVG直接記述、画像指定などに対応しています。
 *
 * @example
 * <LismIcon icon="menu" label="メニュー" />
 * <LismIcon :icon="{ as: MyIcon }" size="2xl" />
 * <LismIcon viewBox="0 0 24 24"><path d="..." /></LismIcon>
 */
type Props = /* @vue-ignore */ IconProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
const attrs = useAttrs()

/**
 * コンポーネントに渡されたプロパティと属性を解析し、Lismコンポーネントに渡す最終的なデータを生成します。
 */
const iconData = computed(() => {
  // props と attrs をマージして処理する
  const all = { ...props, ...attrs } as LismProps
  const { icon, label, size, ...rest } = all

  const isImg = !!rest.src
  let iconAs: string | Component = (rest.as as string | Component) || (isImg ? 'img' : 'svg')
	const iconExProps = { ...(rest.exProps as Record<string, unknown>) }
  let iconPath = ''
  let iconViewBox = rest.viewBox as string | undefined

  // iconプロパティの解析
  if (typeof icon === 'string') {
    const preset =
      (phIcons as Record<string, { viewBox: string; path: string }>)[icon] ||
      (logoIcons as Record<string, { viewBox: string; path: string }>)[icon]
    if (preset) {
      iconViewBox = preset.viewBox
      iconPath = preset.path
    }
  } else if (typeof icon === 'object' && icon !== null) {
    const iconObj = icon as { as?: string | Component } & Record<string, unknown>
    if (iconObj.as) {
      iconAs = iconObj.as
    }
    Object.assign(iconExProps, iconObj)
    delete iconExProps.as
  }

  // アクセシビリティ属性の決定
  const labelAttrs: Record<string, string> = {}
  if (typeof label === 'string' && label) {
    labelAttrs['aria-label'] = label
    labelAttrs['role'] = 'img'
  } else if (!isImg) {
    labelAttrs['aria-hidden'] = 'true'
  }

  return {
    lismProps: {
      ...rest,
      as: iconAs,
      exProps: Object.keys(iconExProps).length > 0 ? iconExProps : undefined,
      fz: (size as string | number | undefined) || (rest.fz as string | number | undefined),
      viewBox: iconViewBox,
      ...labelAttrs,
    },
    iconPath,
  }
})
</script>

<template>
  <Lism v-bind="iconData.lismProps" atomic="icon">
    <template v-if="iconData.iconPath">
      <path :d="iconData.iconPath" />
    </template>
    <slot />
  </Lism>
</template>
