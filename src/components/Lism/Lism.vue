<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { getLismPropsVue } from './useLism'

// propsは Lism のコアプロパティのみを定義し、残りは attrs から透過的に取得する
interface Props {
  /** レンダリングするHTML要素。 'as' よりも優先されます。 */
  tag?: string
  /** レンダリングするコンポーネントまたは要素 */
  as?: string | object
  /** Lism の解析を通さずに直接要素に渡す属性 */
  variant?: string
  lismClass?: string
  exProps?: Record<string, unknown>
}

const props = withDefaults(defineProps<Props>(), {
  // tag または as が未指定の場合は div になります
})

const attrs = useAttrs()

// レンダリングするコンポーネントを決定 (tag > as > div)
const componentTag = computed(() => props.tag || props.as || 'div')

// props と attrs の変更に追従できるよう、computed で出力を生成
const lismOutput = computed(() => {
  // $attrs には defineProps で宣言したプロパティが含まれないため、
  // パースに必要な lismClass と variant を手動でマージして解析処理へ送る
  const output = getLismPropsVue({
    ...attrs,
    lismClass: props.lismClass,
    variant: props.variant,
  })

  // exProps がある場合は、解析後の結果にマージする（解析結果を上書きできるように最後にマージ）
  if (props.exProps) {
    return {
      ...output,
      ...props.exProps,
    }
  }

  return output
})
</script>

<template>
  <component :is="componentTag" v-bind="lismOutput">
    <slot />
  </component>
</template>
