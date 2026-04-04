import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismHeading, LismStack } from '@/components'

const meta: Meta<typeof LismHeading> = {
  title: 'Components/Semantic/Heading',
  component: LismHeading,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismHeading>

export const Default: Story = {
  args: {
    lv: 2,
    default: '見出しレベル 2',
  },
}

export const Levels: Story = {
  render: () => ({
    components: { LismHeading, LismStack },
    template: `
      <LismStack g="20">
        <LismHeading lv="1">レベル 1 見出し</LismHeading>
        <LismHeading lv="2">レベル 2 見出し</LismHeading>
        <LismHeading lv="3">レベル 3 見出し</LismHeading>
        <LismHeading lv="4">レベル 4 見出し</LismHeading>
        <LismHeading lv="5">レベル 5 見出し</LismHeading>
        <LismHeading lv="6">レベル 6 見出し</LismHeading>
      </LismStack>
    `,
  }),
}

export const Styled: Story = {
  args: {
    lv: 2,
    fz: '3xl',
    fw: 'bold',
    c: 'brand',
    ta: 'center',
    default: 'カスタムスタイル見出し',
  },
}
