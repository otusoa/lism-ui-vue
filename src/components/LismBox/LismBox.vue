<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps } from '../../core/types'

type Props = /* @vue-ignore */ LismCoreBaseProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
  <Lism lism-class="l--box" v-bind="$attrs">
    <slot />
  </Lism>
</template>

<style scoped>
/* CSSファイルが生成されないため、残す */
.css-generate {
  align-self: auto;
}
</style>
