<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, SwitchColsProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  breakSize?: SwitchColsProps['breakSize']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="switchCols">
    <slot />
  </Lism>
</template>
