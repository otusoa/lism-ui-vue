<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismBaseProps, WithSideProps } from '../../core/types'

type Props =
  /* @vue-ignore */ LismBaseProps & {
    /**
     * サイドバーの幅を指定します。
     */
    sideW?: WithSideProps['sideW']

    /**
     * メインエリアで維持したい最小幅を指定します。
     */
    mainW?: WithSideProps['mainW']
  }

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()
</script>

<template>
  <Lism v-bind="{ ...props, ...$attrs }" layout="withSide">
    <slot />
  </Lism>
</template>
