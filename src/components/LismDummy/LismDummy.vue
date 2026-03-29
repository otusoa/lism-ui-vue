<script setup lang="ts">
import { computed } from 'vue'
import { Lism } from '../Lism'
import type { LismCoreBaseProps, DummyProps } from '../../core/types'
import { getContent } from '../../core/dummy-adapter'

interface Props extends DummyProps, /* @vue-ignore */ LismCoreBaseProps {}

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<Props>(), {
  lang: 'en',
  length: 'm',
  offset: 0,
})

const tagName = computed(() => (props.as || props.tag || 'p') as string)

const isImg = computed(() => tagName.value === 'img')

const lismProps = computed(() => {
  // Dummy固有のPropsおよびタグ指定用のPropsを除外してLismに渡す
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pre, length, lang, offset, as, tag, ...rest } = props
  return rest
})

// Image用のProps（デフォルトのサイズなど、明示的に指定するものを除外）
const imgProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { src, width, height, ...rest } = lismProps.value
  return rest
})

const dummyContent = computed(() => {
  if (isImg.value) return ''

  return getContent({
    tag: tagName.value,
    pre: props.pre,
    lang: props.lang as 'ja' | 'en' | 'ar',
    length: props.length,
    offset: props.offset,
  })
})
</script>

<template>
  <!-- 画像 -->
  <Lism
    v-if="isImg"
    as="img"
    src="https://cdn.lism-css.com/dummy-image.jpg"
    :width="600"
    :height="400"
    alt="ダミー画像"
    v-bind="{ ...imgProps, ...$attrs }"
  />
  <!-- リスト（ul/ol）または通常テキスト -->
  <!-- リストタグ（ul/ol）: クラスなどの属性を持たせない素のタグを表示 -->
  <ul v-else-if="tagName === 'ul'" v-html="dummyContent"></ul>
  <ol v-else-if="tagName === 'ol'" v-html="dummyContent"></ol>

  <!-- 通常テキスト: Lismコンポーネントとして描画 -->
  <!-- eslint-disable-next-line vue/no-v-html -->
  <Lism v-else :as="tagName" v-bind="{ ...lismProps, ...$attrs }" v-html="dummyContent" />
</template>
