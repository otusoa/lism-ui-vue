import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismFluidCols, LismBox } from '@/components'

const meta: Meta<typeof LismFluidCols> = {
  title: 'Layout/FluidCols',
  component: LismFluidCols,
  tags: ['autodocs'],
  argTypes: {
    cols: { control: 'text' },
    autoFill: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof LismFluidCols>

export const Default: Story = {
  render: (args) => ({
    components: { LismFluidCols, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFluidCols v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 3</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 4</LismBox>
      </LismFluidCols>
    `,
  }),
  args: {
    cols: '240px',
  },
}

export const AutoFill: Story = {
  render: (args) => ({
    components: { LismFluidCols, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFluidCols v-bind="args" autoFill g="20">
        <LismBox p="30" bgc="base-2" bd>Card 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Card 2</LismBox>
      </LismFluidCols>
    `,
  }),
  args: {
    cols: '200px',
  },
}
