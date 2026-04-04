<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'
import { Lism } from '../Lism'
import type { HeadingProps } from '../../core/types'

// サジェストの復活と「横取り」を両立させるプロパティ定義
interface InterceptProps {
	lv?: HeadingProps['lv']
	tag?: string
	as?: string | object
}
type Props = InterceptProps & /* @vue-ignore */ HeadingProps

defineOptions({ inheritAttrs: false })
const props = defineProps<Props>()

const componentTag = computed(() => {
	if (props.lv) return `h${props.lv}`
	return (props.tag as string) || (props.as as string) || 'h2'
})
</script>

<template>
	<Lism v-bind="$attrs" :as="componentTag">
		<slot />
	</Lism>
</template>
