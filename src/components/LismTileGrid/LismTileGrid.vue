<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps, TileGridProps } from '../../core/types'

type Props = /* @vue-ignore */ LismBaseProps & Partial<TileGridProps>

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
  <Lism is-container>
    <Lism layout="tileGrid" v-bind="$attrs">
      <slot />
    </Lism>
  </Lism>
</template>
