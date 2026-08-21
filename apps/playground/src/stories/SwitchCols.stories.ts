import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismSwitchColumns, LismBox } from '@/components'

const meta: Meta = {
  title: 'Layout/SwitchColumns',
  component: LismSwitchColumns,
  tags: ['autodocs'],
  argTypes: {
    breakSize: { control: 'text' },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: (args) => ({
    components: { LismSwitchColumns, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismSwitchColumns v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Card A</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card B</LismBox>
      </LismSwitchColumns>
    `,
  }),
  args: {
    breakSize: 'sm',
  },
}

export const ThreeCards: Story = {
  render: (args) => ({
    components: { LismSwitchColumns, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismSwitchColumns v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
      </LismSwitchColumns>
    `,
  }),
  args: {
    breakSize: 'md',
  },
}
