import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismCluster, LismBox } from '@/components'

const meta: Meta<typeof LismCluster> = {
  title: 'Components/Layout/Cluster',
  component: LismCluster,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismCluster>

export const Tags: Story = {
  render: (args) => ({
    components: { LismCluster, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismCluster v-bind="args">
        <LismBox p="5 15" bd bdrs="pill" fz="s" v-for="tag in ['Vue', 'React', 'TypeScript', 'LismCSS', 'Storybook', 'Vite', 'Pinia']" :key="tag">
          {{ tag }}
        </LismBox>
      </LismCluster>
    `,
  }),
  args: {
    g: '10',
  },
}

export const Center: Story = {
  render: (args) => ({
    components: { LismCluster, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismCluster v-bind="args">
        <LismBox p="10 25" bgc="brand" c="white" bdrs="2">Button 1</LismBox>
        <LismBox p="10 25" bd bdrs="2">Button 2</LismBox>
      </LismCluster>
    `,
  }),
  args: {
    g: '20',
    jc: 'c',
  },
}
