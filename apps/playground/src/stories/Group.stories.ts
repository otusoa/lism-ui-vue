import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismGroup, LismHeading, LismText, LismBox } from '@/components'

const meta: Meta<typeof LismGroup> = {
  title: 'Components/Semantic/Group',
  component: LismGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismGroup>

export const Section: Story = {
  render: (args) => ({
    components: { LismGroup, LismHeading, LismText },
    setup() {
      return { args }
    },
    template: `
      <LismGroup v-bind="args">
        <LismHeading lv="2">セクションタイトル</LismHeading>
        <LismText mt="20">
          LismGroup を section として使用し、内部の見出しやテキストの構造をまとめます。
        </LismText>
      </LismGroup>
    `,
  }),
  args: {
    as: 'section',
    py: '50',
    px: '20',
    bgc: 'base-2',
  },
}

export const Article: Story = {
  render: (args) => ({
    components: { LismGroup, LismHeading, LismText, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismGroup v-bind="args">
        <LismHeading lv="2">記事見出し</LismHeading>
        <LismBox mt="20" bgc="white" p="20" bd>
          <LismText>記事の内容がここに入ります。</LismText>
        </LismBox>
      </LismGroup>
    `,
  }),
  args: {
    as: 'article',
    p: '30',
    bdrs: '3',
    bgc: 'base-1',
  },
}
