<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  cols?: LismCoreBaseProps['cols']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="columns">
    <slot />
  </Lism>
</template>
