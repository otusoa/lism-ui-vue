<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, ListItemAllowedTag } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
	tag?: string
	as?: ListItemAllowedTag
}

type PropsBase = /* @vue-ignore */ LismCoreBaseProps
defineProps<Props & PropsBase>()

defineOptions({ inheritAttrs: false })
</script>

<template>
	<Lism as="li" v-bind="$attrs">
		<slot />
	</Lism>
</template>
