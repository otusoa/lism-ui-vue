<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LinkProps } from '../../core/types'

type Props = /* @vue-ignore */ LinkProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism :as="props.as ?? 'a'" v-bind="$attrs">
    <slot />
  </Lism>
</template>
