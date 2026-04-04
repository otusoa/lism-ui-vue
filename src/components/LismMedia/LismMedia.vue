<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, MediaAllowedTag } from '../../core/types'
import type { ImgHTMLAttributes, VideoHTMLAttributes, IframeHTMLAttributes } from 'vue'

type NativeMediaProps = ImgHTMLAttributes & VideoHTMLAttributes & IframeHTMLAttributes

interface Props extends /* @vue-ignore */ NativeMediaProps {
  tag?: string
  as?: MediaAllowedTag
  src?: string
}

type PropsBase = Props & /* @vue-ignore */ LismCoreBaseProps
const props = defineProps<PropsBase>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <Lism v-bind="$attrs" :tag="props.tag" :as="props.as || 'img'" :src="props.src">
    <slot />
  </Lism>
</template>
