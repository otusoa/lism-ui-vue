import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismInline, LismText } from '@/components'

const meta: Meta<typeof LismInline> = {
  title: 'Components/Semantic/Inline',
  component: LismInline,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismInline>

export const Default: Story = {
  render: (args) => ({
    components: { LismInline, LismText },
    setup() {
      return { args }
    },
    template: `
      <LismText>
        テキストの中に <LismInline v-bind="args">{{ args.default }}</LismInline> を含めることができます。
      </LismText>
    `,
  }),
  args: {
    as: 'span',
    c: 'brand',
    fw: 'bold',
    default: 'インライン要素',
  },
}

export const Strong: Story = {
  render: (args) => ({
    components: { LismInline, LismText },
    setup() {
      return { args }
    },
    template: `
      <LismText>
        重要な部分は <LismInline v-bind="args">strongタグ</LismInline> で囲みます。
      </LismText>
    `,
  }),
  args: {
    as: 'strong',
    bgc: 'yellow-light',
  },
}
