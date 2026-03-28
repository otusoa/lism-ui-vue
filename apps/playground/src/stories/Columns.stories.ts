import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismColumns, LismBox } from '@/components'

const meta: Meta<typeof LismColumns> = {
  title: 'Layout/Columns',
  component: LismColumns,
  tags: ['autodocs'],
  argTypes: {
    cols: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof LismColumns>

export const Default: Story = {
  render: (args) => ({
    components: { LismColumns, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismColumns v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Column 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Column 2</LismBox>
        <LismBox p="30" bgc="base-2" bd>Column 3</LismBox>
      </LismColumns>
    `,
  }),
  args: {
    cols: '3',
  },
}

export const Responsive: Story = {
  render: (args) => ({
    components: { LismColumns, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismColumns v-bind="args" g="20">
        <LismBox p="30" bgc="base-2" bd>Column 1</LismBox>
        <LismBox p="30" bgc="base-2" bd>Column 2</LismBox>
        <LismBox p="30" bgc="base-2" bd>Column 3</LismBox>
        <LismBox p="30" bgc="base-2" bd>Column 4</LismBox>
      </LismColumns>
    `,
  }),
  args: {
    cols: ['1', '2', '4'],
  },
}
