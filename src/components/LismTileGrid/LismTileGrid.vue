<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps, TileGridProps } from '../../core/types'

type Props = /* @vue-ignore */ LismBaseProps & Partial<TileGridProps>

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism is-container>
    <Lism v-bind="{ ...props, ...$attrs }" layout="tileGrid">
      <slot />
    </Lism>
  </Lism>
</template>
