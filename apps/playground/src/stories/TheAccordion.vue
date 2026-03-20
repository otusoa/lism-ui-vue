<script setup lang="ts">
import { ref } from 'vue'
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeading,
  AccordionButton,
  AccordionPanel,
  AccordionContent,
} from '../../../../src/components/Accordion'

const openItems = ref<Set<number>>(new Set([0]))

const items = [
  { id: 0, title: 'Item 1', content: 'This is the content of item 1' },
  { id: 1, title: 'Item 2', content: 'This is the content of item 2' },
  { id: 2, title: 'Item 3', content: 'This is the content of item 3' },
]

const toggleItem = (id: number) => {
  const next = new Set(openItems.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  openItems.value = next
}
</script>

<template>
  <div class="p-20">
    <h1 class="text-2xl font-bold mb-10">Accordion Component</h1>

    <AccordionRoot :allow-multiple="true">
      <AccordionItem v-for="item in items" :key="item.id" :id="`item-${item.id}`" :is-open="openItems.has(item.id)">
        <AccordionHeading>
          <AccordionButton p="20" :is-open="openItems.has(item.id)" @toggle="toggleItem(item.id)">
            <span>{{ item.title }}</span>
          </AccordionButton>
        </AccordionHeading>
        <AccordionPanel :id="`item-${item.id}`" p="20" pt="5" :is-open="openItems.has(item.id)">
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionPanel>
      </AccordionItem>
    </AccordionRoot>
  </div>
</template>
