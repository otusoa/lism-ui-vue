<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, FlowValue } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  flow?: FlowValue
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="flow">
    <slot />
  </Lism>
</template>
