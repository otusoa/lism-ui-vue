<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Lism } from '../Lism'
import type { BoxLinkProps } from '../../core/types'

type Props = /* @vue-ignore */ BoxLinkProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
const attrs = useAttrs()

const componentTag = computed(() => {
  return props.as || (attrs.href ? 'a' : 'div')
})
</script>

<template>
  <Lism :as="componentTag" :is-link-box="true" v-bind="$attrs">
    <slot />
  </Lism>
</template>

<style scoped></style>
