import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismSideMain, LismBox } from '@/components'

const meta: Meta<typeof LismSideMain> = {
  title: 'Components/Layout/SideMain',
  component: LismSideMain,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismSideMain>

export const Default: Story = {
  render: (args) => ({
    components: { LismSideMain, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismSideMain v-bind="args" g="20">
        <LismBox p="20" bgc="base-2" bd>Sidebar</LismBox>
        <LismBox p="20" bgc="base-1" bd>Main Content Area</LismBox>
      </LismSideMain>
    `,
  }),
  args: {
    sideW: '200px',
    mainW: '60%',
  },
}

export const RightSide: Story = {
  render: (args) => ({
    components: { LismSideMain, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismSideMain v-bind="args" g="20">
        <LismBox p="20" bgc="base-1" bd>Main Content Area</LismBox>
        <LismBox p="20" bgc="base-2" bd>Right Sidebar</LismBox>
      </LismSideMain>
    `,
  }),
  args: {
    isSide: true,
    sideW: '180px',
  },
}
