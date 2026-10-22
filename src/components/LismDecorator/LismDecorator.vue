<script setup lang="ts">
/**
 * @file LismDecorator コンポーネント
 * 装飾用の空要素を出力します。デフォルトで aria-hidden="true" が付与されます。
 */
import type { Component } from 'vue'
import Lism from '../Lism/Lism.vue'
import type { DecoratorProps, LismBaseProps } from '../../core/types'

// 処理が必要なプロパティを明示的に定義する
interface Props extends /* @vue-ignore */ LismBaseProps {
  as?: keyof HTMLElementTagNameMap | (string & {}) | Component
  size?: DecoratorProps['size']
  css?: Record<string, string | number>
}

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<Props>(), {
  as: 'span',
})
</script>

<template>
  <Lism v-bind="{ 'aria-hidden': 'true', ...props, ...$attrs }" atomic="decorator">
    <slot />
  </Lism>
</template>
