<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps } from '../../core/types'

// Vueコンパイラによる複雑な型の解析（およびそれに伴うビルドエラー）を回避するために、
// 直接 LismCoreBaseProps を使わず、インターフェースを介して @vue-ignore を適用します。
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends /* @vue-ignore */ LismCoreBaseProps {}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()

// isLayer はテンプレート側で固定で指定するため、props から除外して渡す（重複警告の回避）
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { isLayer, ...otherProps } = props
</script>

<template>
  <Lism isLayer v-bind="{ ...$attrs, ...otherProps }">
    <slot />
  </Lism>
</template>
