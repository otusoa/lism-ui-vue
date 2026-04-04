<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { GroupProps } from '../../core/types'

type Props = /* @vue-ignore */ GroupProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
	<Lism v-bind="$attrs" as="div">
		<slot />
	</Lism>
</template>
