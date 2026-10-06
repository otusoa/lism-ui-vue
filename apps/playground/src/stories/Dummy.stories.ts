import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismUiDummy, LismFlow, LismBox } from '@/components'

const meta: Meta<typeof LismUiDummy> = {
  title: 'Components/Dummy',
  component: LismUiDummy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismUiDummy>

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
    as: 'ol',
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
    components: { LismUiDummy, LismFlow, LismBox },
    template: `
      <LismBox p="30" max-w="600px" bd>
        <LismFlow flow="l">
          <LismUiDummy lang="ja" length="s" pre="タイトル: " as="h2" fz="xl" fw="bold" />
          <LismUiDummy lang="ja" length="m" />
          <LismUiDummy as="img" ar="16/9" />
          <LismUiDummy lang="ja" length="l" />
        </LismFlow>
      </LismBox>
    `,
  }),
}
