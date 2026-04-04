<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, InlineAllowedTag } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  as?: InlineAllowedTag
}

const props = defineProps<Props>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Lism v-bind="$attrs" :as="props.as ?? 'span'">
    <slot />
  </Lism>
</template>
