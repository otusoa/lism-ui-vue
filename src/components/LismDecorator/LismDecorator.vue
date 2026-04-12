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
  const css: Record<string, string | number> =
    typeof rest.css === 'object' && rest.css !== null ? { ...rest.css } : {}

  if (clipPath) css.clipPath = clipPath
  if (boxSizing) css.boxSizing = boxSizing

  return {
    ...rest,
    ar: size ? '1/1' : rest.ar,
    w: size ? size : rest.w,
    css: Object.keys(css).length > 0 ? css : rest.css,
  }
})
</script>

<template>
  <Lism v-bind="{ 'aria-hidden': 'true', ...decoratorOutput, ...$attrs }" lism-class="a--decorator">
    <slot />
  </Lism>
</template>
