<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps } from '../../core/types'

type Props = /* @vue-ignore */ LismCoreBaseProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
  <Lism lism-class="l--stack" v-bind="$attrs">
    <slot />
  </Lism>
</template>
