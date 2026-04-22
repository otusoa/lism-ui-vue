<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps } from '../../core/types'

type Props = /* @vue-ignore */ LismBaseProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="box">
    <slot />
  </Lism>
</template>

<style scoped></style>
