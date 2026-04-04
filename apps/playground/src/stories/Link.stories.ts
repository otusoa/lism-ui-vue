import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismLink } from '@/components'

const meta: Meta<typeof LismLink> = {
  title: 'Components/Semantic/Link',
  component: LismLink,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismLink>

export const Default: Story = {
  args: {
    href: 'https://lism-css.com/',
    default: 'LismCSS リンク',
  },
}

export const CustomLink: Story = {
  args: {
    href: '#',
    c: 'brand',
    td: 'u',
    fw: 'bold',
    hov: { scale: '1.1' },
    default: 'カスタムホバースタイル',
  },
}

export const ButtonLike: Story = {
  args: {
    href: '#',
    bgc: 'brand',
    c: 'white',
    p: '10 20',
    bdrs: '2',
    d: 'if',
    td: 'n',
    hov: { opacity: '0.8' },
    default: 'ボタン風リンク',
  },
}
