<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps, SwitchColumnsProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LismBaseProps {
  breakSize?: SwitchColumnsProps['breakSize']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="switchColumns">
    <slot />
  </Lism>
</template>
