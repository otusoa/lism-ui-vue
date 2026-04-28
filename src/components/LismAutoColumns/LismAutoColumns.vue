<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps, AutoColumnsProps } from '../../core/types'

// AutoColumnsProps から layout を除いたものを受け取れるように定義
interface Props extends /* @vue-ignore */ LismBaseProps {
  autoFill?: AutoColumnsProps['autoFill']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="autoColumns">
    <slot />
  </Lism>
</template>
