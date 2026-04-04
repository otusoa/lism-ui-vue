<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { InlineProps } from '../../core/types'

type Props = /* @vue-ignore */ InlineProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
	<Lism v-bind="$attrs" as="span">
		<slot />
	</Lism>
</template>
