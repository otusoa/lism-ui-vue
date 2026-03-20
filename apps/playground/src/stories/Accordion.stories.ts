import 'lism-css/main.css'
import type { Component } from 'vue'
import { ref } from 'vue'
import { Accordion } from '../../../../src/components/Accordion'

const meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  decorators: [
    (Story: Component) => ({
      template: '<div style="padding: 2rem;"><story /></div>',
      components: { Story },
    }),
  ],
}

export default meta
type Story = {
  render: () => {
    components: Record<string, unknown>
    setup: () => Record<string, unknown>
    template: string
  }
}

export const Default: Story = {
  render: () => ({
    components: {
      AccordionRoot: Accordion.Root,
      AccordionItem: Accordion.Item,
      AccordionHeading: Accordion.Heading,
      AccordionButton: Accordion.Button,
      AccordionPanel: Accordion.Panel,
      AccordionContent: Accordion.Content,
    },
    setup() {
      const openItems = ref(new Set([0]))
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

      return {
        openItems,
        items,
        toggleItem,
      }
    },
    template: `
      <AccordionRoot :allow-multiple="true">
        <AccordionItem
          v-for="item in items"
          :key="item.id"
          :id="'item-' + item.id"
          :is-open="openItems.has(item.id)"
        >
          <AccordionHeading>
            <AccordionButton p="20" :is-open="openItems.has(item.id)" @toggle="toggleItem(item.id)">
              <span>{{ item.title }}</span>
            </AccordionButton>
          </AccordionHeading>
          <AccordionPanel p="20" pt="5" :is-open="openItems.has(item.id)">
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
}

export const SingleOpen: Story = {
  render: () => ({
    components: {
      AccordionRoot: Accordion.Root,
      AccordionItem: Accordion.Item,
      AccordionHeading: Accordion.Heading,
      AccordionButton: Accordion.Button,
      AccordionPanel: Accordion.Panel,
      AccordionContent: Accordion.Content,
    },
    setup() {
      const openItems = ref(new Set([0]))
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
          next.clear()
          next.add(id)
        }
        openItems.value = next
      }

      return {
        openItems,
        items,
        toggleItem,
      }
    },
    template: `
      <AccordionRoot :allow-multiple="false">
        <AccordionItem
          v-for="item in items"
          :key="item.id"
          :id="'item-' + item.id"
          :is-open="openItems.has(item.id)"
        >
          <AccordionHeading>
            <AccordionButton p="20" :is-open="openItems.has(item.id)" @toggle="toggleItem(item.id)">
              <span>{{ item.title }}</span>
            </AccordionButton>
          </AccordionHeading>
          <AccordionPanel p="20" pt="5" :is-open="openItems.has(item.id)">
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    `,
  }),
}
