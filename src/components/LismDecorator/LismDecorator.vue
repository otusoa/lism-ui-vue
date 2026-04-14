<script setup lang="ts">
/**
 * @file LismDecorator コンポーネント
 * 装飾用の空要素を出力します。デフォルトで aria-hidden="true" が付与されます。
 */
import { computed, type Component } from 'vue'
import Lism from '../Lism/Lism.vue'
import type { DecoratorProps, LismCoreBaseProps } from '../../core/types'

// 処理が必要なプロパティを明示的に定義する
interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  as?: keyof HTMLElementTagNameMap | (string & {}) | Component
  size?: DecoratorProps['size']
  clipPath?: DecoratorProps['clipPath']
  boxSizing?: DecoratorProps['boxSizing']
  css?: string | Record<string, string | number>
}

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<Props>(), {
  as: 'span',
})

const decoratorOutput = computed(() => {
  const { size, clipPath, boxSizing, ...rest } = props

  // スタイルのマージ
  let mergedCss: string | Record<string, string | number> | undefined = rest.css

  if (typeof mergedCss === 'string') {
    const extra = [
      clipPath ? `clip-path:${clipPath}` : '',
      boxSizing ? `box-sizing:${boxSizing}` : '',
    ]
      .filter(Boolean)
      .join(';')
    if (extra) mergedCss = `${mergedCss}${mergedCss.trim().endsWith(';') ? '' : ';'}${extra}`
  } else {
    const cssObj: Record<string, string | number> =
      mergedCss && typeof mergedCss === 'object' ? { ...mergedCss } : {}
    if (clipPath) cssObj.clipPath = clipPath
    if (boxSizing) cssObj.boxSizing = boxSizing
    mergedCss = Object.keys(cssObj).length > 0 ? cssObj : undefined
  }
  return {
    ...rest,
    ar: size ? '1/1' : rest.ar,
    w: size ? size : rest.w,
    css: mergedCss,
  }
})
</script>

<template>
  <Lism v-bind="{ 'aria-hidden': 'true', ...decoratorOutput, ...$attrs }" lism-class="a--decorator">
    <slot />
  </Lism>
</template>
