<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps } from '../../core/types'

type Props = /* @vue-ignore */ LismBaseProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
  <Lism layout="flex" v-bind="$attrs">
    <slot />
  </Lism>
</template>
