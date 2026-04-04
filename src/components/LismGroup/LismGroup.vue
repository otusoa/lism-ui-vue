<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, GroupAllowedTag } from '../../core/types'

// サジェストの復活と「横取り」を両立させるプロパティ定義
interface Props extends /* @vue-ignore */ LismCoreBaseProps {
  tag?: string
  as?: GroupAllowedTag
}

type PropsBase = /* @vue-ignore */ LismCoreBaseProps
defineProps<Props & PropsBase>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Lism as="div" v-bind="$attrs">
    <slot />
  </Lism>
</template>
