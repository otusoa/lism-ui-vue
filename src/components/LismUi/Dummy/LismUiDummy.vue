<script setup lang="ts">
import { computed } from 'vue'
import { Lism } from '../../Lism'
import type { LismCoreBaseProps, DummyProps } from '../../../core/types'
import { getContent } from '../../../core/dummy-adapter'

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
  const { pre, length, lang, offset, as, tag, src, width, height, ...rest } = props
  return rest
})

// Image用のProps（デフォルトのサイズなど、明示的に指定するものを除外）
const imgProps = computed(() => ({
  ...lismProps.value,
  src: props.src ?? 'https://cdn.lism-css.com/dummy-image.jpg',
  width: props.width ?? 600,
  height: props.height ?? 400,
}))

const dummyContent = computed(() => {
  if (isImg.value) return ''

  return getContent({
    tag: tagName.value,
    pre: props.pre,
    lang: props.lang, // adapter側の Lang 型に合わせる
    length: props.length,
    offset: props.offset,
  })
})
</script>

<template>
  <!-- 画像 -->
  <Lism v-if="isImg" as="img" alt="ダミー画像" v-bind="{ ...imgProps, ...$attrs }" />

  <!-- リスト（ul/ol）: Lismの解析を通さないクリーンなHTMLを出力 -->
  <ul v-else-if="tagName === 'ul'" v-bind="$attrs" v-html="dummyContent"></ul>
  <ol v-else-if="tagName === 'ol'" v-bind="$attrs" v-html="dummyContent"></ol>

  <!-- 通常テキスト: Lismコンポーネントとして描画 -->
  <Lism v-else :as="tagName" v-bind="{ ...lismProps, ...$attrs }">
    <span v-html="dummyContent"></span>
  </Lism>
</template>
