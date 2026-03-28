<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps } from '../../core/types'

type Props = /* @vue-ignore */ LismCoreBaseProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="center">
    <slot />
  </Lism>
</template>
