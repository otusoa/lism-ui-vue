import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismText } from '@/components'

const meta: Meta<typeof LismText> = {
  title: 'Components/Semantic/Text',
  component: LismText,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'div', 'blockquote', 'address', 'figcaption', 'pre'],
    },
  },
}

export default meta
type Story = StoryObj<typeof LismText>

export const Default: Story = {
  args: {
    as: 'p',
    default: 'これは LismText コンポーネントを使用した段落（pタグ）です。',
  },
}

export const Blockquote: Story = {
  args: {
    as: 'blockquote',
    bd: 'l',
    pl: '20',
    bgc: 'base-2',
    py: '10',
    default: 'これは blockquote としてレンダリングされたテキストです。',
  },
}

export const LargeText: Story = {
  args: {
    fz: 'xl',
    lh: 'l',
    default: 'フォントサイズや行間を調整した大きなテキストです。',
  },
}
