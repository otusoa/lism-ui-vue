import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismAutoColumns, LismBox } from '@/components'

const meta: Meta = {
  title: 'Layout/AutoColumns',
  component: LismAutoColumns,
  tags: ['autodocs'],
  argTypes: {
    cols: { control: 'text' },
    autoFit: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: (args) => ({
    components: { LismAutoColumns, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismAutoColumns v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 4</LismBox>
      </LismAutoColumns>
    `,
  }),
  args: {
    cols: '240px',
  },
}

export const AutoFit: Story = {
  render: (args) => ({
    components: { LismAutoColumns, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismAutoColumns v-bind="args" autoFit g="20">
        <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
      </LismAutoColumns>
    `,
  }),
  args: {
    cols: '200px',
  },
}
