<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { getLismPropsVue } from '../../core/lism-adapter'

import type { LismCoreBaseProps } from '../../core/types'

defineOptions({ inheritAttrs: false })

// propsは Lism のコアプロパティのみを型定義し、残りは attrs から透過的に取得する
interface Props extends /* @vue-ignore */ LismCoreBaseProps {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tag, as, exProps, ...lismProps } = props

  // $attrs には defineProps で宣言したプロパティが含まれない場合があるため、
  // 両方をマージして解析処理へ送る
  const output = getLismPropsVue({
    ...lismProps,
    ...attrs,
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
