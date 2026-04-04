<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { ListProps } from '../../core/types'

type Props = /* @vue-ignore */ ListProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
	<Lism as="ul" v-bind="$attrs">
		<slot />
	</Lism>
</template>
