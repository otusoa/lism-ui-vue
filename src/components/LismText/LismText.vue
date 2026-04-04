<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { TextProps } from '../../core/types'

type Props = /* @vue-ignore */ TextProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
	<Lism v-bind="$attrs" as="p">
		<slot />
	</Lism>
</template>
