import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismFlex, LismBox } from '@/components'

const meta: Meta<typeof LismFlex> = {
  title: 'Components/Layout/Flex',
  component: LismFlex,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismFlex>

export const Default: Story = {
  render: (args) => ({
    components: { LismFlex, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFlex v-bind="args">
        <LismBox p="20" bgc="base-2" bd>Item 1</LismBox>
        <LismBox p="20" bgc="base-2" bd>Item 2</LismBox>
        <LismBox p="20" bgc="base-2" bd>Item 3</LismBox>
      </LismFlex>
    `,
  }),
  args: {
    g: '20',
    ai: 'center',
    jc: 'start',
  },
}

export const Center: Story = {
  render: (args) => ({
    components: { LismFlex, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFlex v-bind="args" h="200px" bd>
        <LismBox p="20" bgc="brand" c="white">Centered Item</LismBox>
      </LismFlex>
    `,
  }),
  args: {
    ai: 'c',
    jc: 'c',
  },
}

export const Wrap: Story = {
  render: (args) => ({
    components: { LismFlex, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFlex v-bind="args" w="300px" bd>
        <LismBox p="20" bgc="base-2" bd v-for="i in 6" :key="i">Item {{ i }}</LismBox>
      </LismFlex>
    `,
  }),
  args: {
    fxw: 'w',
    g: '10',
  },
}
