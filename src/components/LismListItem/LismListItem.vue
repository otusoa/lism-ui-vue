<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { ListItemProps } from '../../core/types'

type Props = /* @vue-ignore */ ListItemProps

defineOptions({ inheritAttrs: false })
defineProps<Props>()
</script>

<template>
	<Lism as="li" v-bind="$attrs">
		<slot />
	</Lism>
</template>
