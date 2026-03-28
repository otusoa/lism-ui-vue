<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, FluidColsProps } from '../../core/types'

// FluidColsProps から layout を除いたものを受け取れるように定義
interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  autoFill?: FluidColsProps['autoFill']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="fluidCols">
    <slot />
  </Lism>
</template>
