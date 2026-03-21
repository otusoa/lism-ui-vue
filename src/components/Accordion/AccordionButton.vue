<script setup lang="ts">
import { computed, inject, type ComputedRef } from 'vue'
import { accordionItemIdKey, accordionRootContextKey } from '@/components/Accordion/context'
import AccordionIcon from '@/components/Accordion/AccordionIcon.vue'

export interface Props {
  controls?: string
  isOpen?: boolean
}

interface Emits {
  toggle: []
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const itemId = inject<ComputedRef<string> | undefined>(accordionItemIdKey, undefined)
const rootContext = inject(accordionRootContextKey, null)
const ariaControls = computed(() => props.controls || itemId?.value)
const isOpened = computed(() => {
  if (typeof props.isOpen === 'boolean') {
    return props.isOpen
  }
  if (!itemId?.value || !rootContext) {
    return false
  }
  return rootContext.isItemOpen(itemId.value)
})

const onClick = () => {
  if (itemId?.value && rootContext) {
    rootContext.toggleItem(itemId.value)
  }
  emit('toggle')
}
</script>

<template>
  <button
    type="button"
    class="c--accordion_button l--flex set--plain -g:10 -w:100% -ai:center -jc:between -p:20"
    :aria-controls="ariaControls"
    :aria-expanded="isOpened"
    @click="onClick"
  >
    <slot />
    <AccordionIcon />
  </button>
</template>
