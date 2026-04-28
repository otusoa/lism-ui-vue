<script setup lang="ts">
import Lism from '../Lism/Lism.vue'
import type { LismBaseProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LismBaseProps {
  as?: LismBaseProps['as']
}

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<Props>(), {
  as: 'hr',
})
</script>

<template>
  <Lism v-bind="$attrs" :as="props.as" aria-hidden="true" atomic="divider">
    <slot />
  </Lism>
</template>
