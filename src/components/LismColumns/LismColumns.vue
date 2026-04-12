<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LismBaseProps {
  cols?: LismBaseProps['cols']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism is-container>
    <Lism v-bind="{ ...props, ...$attrs }" layout="columns">
      <slot />
    </Lism>
  </Lism>
</template>
