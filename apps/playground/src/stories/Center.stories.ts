import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LismCenter from '@/components/LismCenter/LismCenter.vue'

const meta: Meta<typeof LismCenter> = {
  title: 'Layout/Center',
  component: LismCenter,
  tags: ['autodocs'],
  argTypes: {
    p: { control: 'text' },
    bgc: { control: 'text' },
    g: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof LismCenter>

export const Default: Story = {
  render: (argTypes) => ({
    components: { LismCenter },
    setup() {
      return { argTypes }
    },
    template: `
      <LismCenter v-bind="argTypes" style="min-height: 200px; width: 100%; outline: 1px dashed #ccc;">
        <div style="background: #eee; padding: 20px; border: 1px solid #999;">
          Centered Content
        </div>
      </LismCenter>
    `,
  }),
  args: {
    p: '10',
    bgc: 'base-2',
    g: '',
  },
}

export const MultipleItems: Story = {
  render: (args) => ({
    components: { LismCenter },
    setup() {
      return { args }
    },
    template: `
      <LismCenter v-bind="args" style="min-height: 200px; width: 100%; outline: 1px dashed #ccc;">
        <div style="background: #eee; padding: 10px; border: 1px solid #999;">Item 1</div>
        <div style="background: #eee; padding: 10px; border: 1px solid #999;">Item 2</div>
      </LismCenter>
    `,
  }),
  args: {
    p: '40',
    bgc: 'base-2',
    g: '20',
  },
}
