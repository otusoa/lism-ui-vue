<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, ListItemAllowedTag } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  as?: ListItemAllowedTag
}

const props = defineProps<Props>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Lism :as="props.as ?? 'li'" v-bind="$attrs">
    <slot />
  </Lism>
</template>
