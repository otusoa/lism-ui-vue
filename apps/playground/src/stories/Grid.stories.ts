import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismGrid, LismBox } from '@/components'

const meta: Meta<typeof LismGrid> = {
  title: 'Components/Layout/Grid',
  component: LismGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismGrid>

export const Default: Story = {
  render: (args) => ({
    components: { LismGrid, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismGrid v-bind="args">
        <LismBox p="20" bgc="base-2" bd>Grid Item 1</LismBox>
        <LismBox p="20" bgc="base-2" bd>Grid Item 2</LismBox>
        <LismBox p="20" bgc="base-2" bd>Grid Item 3</LismBox>
        <LismBox p="20" bgc="base-2" bd>Grid Item 4</LismBox>
      </LismGrid>
    `,
  }),
  args: {
    gtc: 'repeat(2, 1fr)',
    g: '20',
  },
}

export const Complex: Story = {
  render: (args) => ({
    components: { LismGrid, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismGrid v-bind="args">
        <LismBox p="20" bgc="brand" c="white" grid-column="span 2">Header (span 2)</LismBox>
        <LismBox p="20" bgc="base-2" bd>Sidebar</LismBox>
        <LismBox p="20" bgc="base-2" bd>Main Content</LismBox>
      </LismGrid>
    `,
  }),
  args: {
    gtc: '150px 1fr',
    g: '10',
  },
}
