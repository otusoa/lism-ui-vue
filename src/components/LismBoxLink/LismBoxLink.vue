<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Lism } from '../Lism'
import type { BoxLinkProps } from '../../core/types'

interface Props extends /* @vue-ignore */ BoxLinkProps {
  as?: BoxLinkProps['as']
  href?: BoxLinkProps['href']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
const attrs = useAttrs()

const componentTag = computed(() => {
  return props.as || (props.href || attrs.href ? 'a' : 'div')
})
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" is-box-link :as="componentTag">
    <slot />
  </Lism>
</template>

<style scoped></style>
