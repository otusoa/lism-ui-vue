<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Lism } from '../Lism'
import type { LismCoreBaseProps, ListAllowedTag } from '../../core/types'

interface Props extends /* @vue-ignore */ LismCoreBaseProps {
	tag?: string
	as?: ListAllowedTag
}

type PropsBase = /* @vue-ignore */ LismCoreBaseProps
defineProps<Props & PropsBase>()

defineOptions({ inheritAttrs: false })
</script>

<template>
	<Lism as="ul" v-bind="$attrs">
		<slot />
	</Lism>
</template>
