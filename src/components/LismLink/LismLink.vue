<script setup lang="ts">
import { Lism } from '../Lism'
import type { LinkProps } from '../../core/types'

interface Props extends /* @vue-ignore */ LinkProps {
  as?: LinkProps['as']
  href?: LinkProps['href']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" :as="props.as ?? 'a'">
    <slot />
  </Lism>
</template>
