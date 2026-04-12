<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Lism } from '../Lism'
import type { LinkBoxProps } from '../../core/types'

type Props = /* @vue-ignore */ LinkBoxProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
const attrs = useAttrs()

const componentTag = computed(() => {
  return props.tag || props.as || (attrs.href ? 'a' : 'div')
})
</script>

<template>
  <Lism :is-link-box="true" :as="componentTag" v-bind="$attrs">
    <slot />
  </Lism>
</template>

<style scoped></style>
