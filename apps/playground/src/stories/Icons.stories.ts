import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { markRaw } from 'vue'
import { PhHeart } from '@phosphor-icons/vue'
import { LismIcon } from '@/components'

const meta: Meta<typeof LismIcon> = {
  title: 'Components/Atomic/Icons',
  component: LismIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof LismIcon>

export const Default: Story = {
  args: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6" /></svg>',
    label: 'チェック',
    fz: '2xl',
    c: 'brand',
  },
}

export const VueComponent: Story = {
  args: {
    icon: markRaw(PhHeart),
    label: 'ハート',
    fz: '2xl',
    c: 'brand',
  },
}

export const SvgSlot: Story = {
  render: (args) => ({
    components: { LismIcon },
    setup() {
      return { args }
    },
    template: `<LismIcon v-bind="args"><circle cx="12" cy="12" r="8" /></LismIcon>`,
  }),
  args: {
    viewBox: '0 0 24 24',
    size: '2em',
    label: '丸',
    c: 'brand',
  },
}
