<script setup lang="ts">
import Lism from '../Lism/Lism.vue'
import type { LismBaseProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LismBaseProps {
  as?: LismBaseProps['as']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" atomic="spacer" aria-hidden="true">
    <slot />
  </Lism>
</template>
