<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, MediaAllowedTag } from '../../core/types'

interface Props {
  tag?: string
  as?: MediaAllowedTag
}

type PropsBase = Props & /* @vue-ignore */ LismCoreBaseProps
defineProps<PropsBase>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Lism v-bind="$attrs" as="img">
    <slot />
  </Lism>
</template>
