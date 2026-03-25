<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps } from '../../core/types'

type Props = /* @vue-ignore */ LismCoreBaseProps & {
  /**
   * コンテンツの最大幅を指定します（is-wrapperを有効にします）。
   * 's', 'm', 'l' などのサイズ、または true を指定できます。
   */
  size?: LismCoreBaseProps['isWrapper']
  // size?: boolean | string
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism is-container :is-wrapper="props.size" v-bind="$attrs">
    <slot />
  </Lism>
</template>
