<script setup lang="ts">
import { computed, inject, onMounted, provide } from 'vue'
import { accordionItemIdKey, accordionRootContextKey } from './context'

let itemIdSeed = 0

interface Props {
  id?: string
  defaultOpen?: boolean
  isOpen?: boolean
}

const props = defineProps<Props>()

const generatedId = `lism-acc-${++itemIdSeed}`
const itemId = computed(() => props.id || generatedId)
const rootContext = inject(accordionRootContextKey, null)

const isOpened = computed(() => {
  if (typeof props.isOpen === 'boolean') {
    return props.isOpen
  }
  if (!rootContext) {
    return false
  }
  return rootContext.isItemOpen(itemId.value)
})

onMounted(() => {
  if (props.defaultOpen && typeof props.isOpen !== 'boolean' && rootContext) {
    rootContext.openItem(itemId.value)
  }
})

provide(accordionItemIdKey, itemId)
</script>

<template>
  <div class="c--accordion_item" :data-opened="isOpened ? '' : undefined">
    <slot />
  </div>
</template>

<style scoped>
.c--accordion_item:not(:first-child) {
  /* lism-cssの-bd-t相当のスタイルをここに記述 */
  border-top: 1px solid #e0e3e8;
}
</style>
