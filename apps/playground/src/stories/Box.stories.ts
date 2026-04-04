import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismBox } from '@/components'

const meta: Meta<typeof LismBox> = {
  title: 'Components/Layout/Box',
  component: LismBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismBox>

export const Default: Story = {
  args: {
    p: '30',
    bgc: 'base-2',
    bdrs: '3',
    bd: true,
    default: 'これは LismBox コンポーネントです。',
  },
}

export const Bordered: Story = {
  args: {
    p: '20',
    bd: 'l',
    bdc: 'brand',
    default: 'ボーダー付きのボックス',
  },
}

export const Glass: Story = {
  args: {
    p: '30',
    bgc: 'rgb(255 255 255 / 20%)',
    style: { blur: '10px' },
    bd: true,
    default: 'グラスモーフィズム風ボックス',
  },
}
