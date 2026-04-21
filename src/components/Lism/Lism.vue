<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { getLismPropsVue } from '../../core/lism-adapter'

import type { Component } from 'vue'
import type { LismBaseProps } from '../../core/types'

defineOptions({ inheritAttrs: false })

// propsは Lism のコアプロパティのみを型定義し、残りは attrs から透過的に取得する
interface Props extends /* @vue-ignore */ LismBaseProps {
  /** レンダリングするコンポーネントまたは要素 */
  as?: keyof HTMLElementTagNameMap | (string & {}) | Component
  /** Lism の解析を通さずに直接要素に渡す属性 */
  exProps?: Record<string, unknown>
}

const props = withDefaults(defineProps<Props>(), {})

const attrs = useAttrs()

// レンダリングするコンポーネントを決定 (as > div)
const componentTag = computed(() => props.as || 'div')

// props と attrs の変更に追従できるよう、computed で出力を生成
const lismOutput = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, exProps, ...lismProps } = props

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
