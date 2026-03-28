import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismSwitchCols, LismBox } from '@/components'

const meta: Meta<typeof LismSwitchCols> = {
  title: 'Layout/SwitchCols',
  component: LismSwitchCols,
  tags: ['autodocs'],
  argTypes: {
    breakSize: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof LismSwitchCols>

export const Default: Story = {
  render: (args) => ({
    components: { LismSwitchCols, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismSwitchCols v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Card A</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card B</LismBox>
      </LismSwitchCols>
    `,
  }),
  args: {
    breakSize: 'sm',
  },
}

export const ThreeCards: Story = {
  render: (args) => ({
    components: { LismSwitchCols, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismSwitchCols v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
      </LismSwitchCols>
    `,
  }),
  args: {
    breakSize: 'md',
  },
}
