<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismProps } from '../../core/types'

type Props = /* @vue-ignore */ LismProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
  <Lism is-layer v-bind="$attrs">
    <slot />
  </Lism>
</template>
