import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismStack, LismBox } from '@/components'

const meta: Meta<typeof LismStack> = {
  title: 'Components/Layout/Stack',
  component: LismStack,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismStack>

export const Default: Story = {
  render: (args) => ({
    components: { LismStack, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismStack v-bind="args">
        <LismBox p="20" bgc="base-2" bd>Item 1</LismBox>
        <LismBox p="20" bgc="base-2" bd>Item 2</LismBox>
        <LismBox p="20" bgc="base-2" bd>Item 3</LismBox>
      </LismStack>
    `,
  }),
  args: {
    g: '20',
  },
}

export const Center: Story = {
  render: (args) => ({
    components: { LismStack, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismStack v-bind="args" bd p="20">
        <LismBox p="20" bgc="brand" c="white" w="fit">Centered Stack Item</LismBox>
        <LismBox p="20" bgc="brand-2" c="white" w="fit">Short</LismBox>
      </LismStack>
    `,
  }),
  args: {
    ai: 'c',
    g: '10',
  },
}
