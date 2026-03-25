<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, SideMainProps } from '../../core/types'

type Props = /* @vue-ignore */ LismCoreBaseProps & {
  /**
   * サイドバーの幅を指定します。
   */
  sideW?: SideMainProps['sideW']

  /**
   * メインエリアで維持したい最小幅を指定します。
   */
  mainW?: SideMainProps['mainW']
}

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism layout="sideMain" :side-w="props.sideW" :main-w="props.mainW" v-bind="$attrs">
    <slot />
  </Lism>
</template>
