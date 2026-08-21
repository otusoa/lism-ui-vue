import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismWithSide, LismBox } from '@/components'

const meta: Meta<typeof LismWithSide> = {
  title: 'Layout/WithSide',
  component: LismWithSide,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismWithSide>

export const Default: Story = {
  render: (args) => ({
    components: { LismWithSide, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismWithSide v-bind="args" g="20">
        <LismBox p="20" bgc="base-2" bd>Sidebar</LismBox>
        <LismBox p="20" bgc="base-1" bd>Main Content Area</LismBox>
      </LismWithSide>
    `,
  }),
  args: {
    sideW: '200px',
    mainW: '60%',
  },
}

export const RightSide: Story = {
  render: (args) => ({
    components: { LismWithSide, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismWithSide v-bind="args" g="20">
        <LismBox p="20" bgc="base-1" bd>Main Content Area</LismBox>
        <LismBox p="20" bgc="base-2" bd>Right Sidebar</LismBox>
      </LismWithSide>
    `,
  }),
  args: {
    isSide: true,
    sideW: '180px',
  },
}
