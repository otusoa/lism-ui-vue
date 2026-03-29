import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismDummy, LismFlow, LismBox } from '@/components'

const meta: Meta<typeof LismDummy> = {
  title: 'Components/Dummy',
  component: LismDummy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismDummy>

export const Default: Story = {
  args: {
    lang: 'ja',
    length: 'm',
  },
}

export const English: Story = {
  args: {
    lang: 'en',
    length: 'm',
  },
}

export const Arabic: Story = {
  args: {
    lang: 'ar',
    length: 'm',
  },
}

export const List: Story = {
  args: {
    as: "ol",
    lang: 'ja',
    length: 's',
  },
}

export const Image: Story = {
  args: {
    as: 'img',
    width: 400,
    height: 300,
  },
}

export const InsideFlow: Story = {
  render: () => ({
    components: { LismDummy, LismFlow, LismBox },
    template: `
      <LismBox p="30" max-w="600px" bd>
        <LismFlow flow="l">
          <LismDummy lang="ja" length="s" pre="タイトル: " as="h2" fz="xl" fw="bold" />
          <LismDummy lang="ja" length="m" />
          <LismDummy as="img" ar="16/9" />
          <LismDummy lang="ja" length="l" />
        </LismFlow>
      </LismBox>
    `,
  }),
}
