<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, FilterProps } from '../../core/types'

// LismProps をベースに、フィルタープロパティを Vue に認識させる
interface Props extends /* @vue-ignore */ LismCoreBaseProps, FilterProps {}

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
