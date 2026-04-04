import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismContainer, LismBox } from '@/components'

const meta: Meta<typeof LismContainer> = {
  title: 'Components/Layout/Container',
  component: LismContainer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismContainer>

export const Default: Story = {
  render: (args) => ({
    components: { LismContainer, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismBox bgc="base-1" py="50">
        <LismContainer v-bind="args">
          <LismBox p="30" bgc="white" bd>
            コンテナの内容（デフォルト幅）
          </LismBox>
        </LismContainer>
      </LismBox>
    `,
  }),
  args: {
    isWrapper: 'm',
  },
}

export const Small: Story = {
  render: (args) => ({
    components: { LismContainer, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismBox bgc="base-1" py="50">
        <LismContainer v-bind="args">
          <LismBox p="30" bgc="white" bd>
            小さなコンテナ (size="s")
          </LismBox>
        </LismContainer>
      </LismBox>
    `,
  }),
  args: {
    isWrapper: 's',
  },
}
