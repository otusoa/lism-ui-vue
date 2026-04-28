<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, ListAllowedTag } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  as?: ListAllowedTag
}

type PropsBase = /* @vue-ignore */ LismCoreBaseProps
const props = defineProps<Props & PropsBase>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" :as="props.as ?? 'ul'">
    <slot />
  </Lism>
</template>
