import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismList, LismListItem } from '@/components'

const meta: Meta<typeof LismList> = {
  title: 'Components/Semantic/List',
  component: LismList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismList>

export const Unordered: Story = {
  render: (args) => ({
    components: { LismList, LismListItem },
    setup() {
      return { args }
    },
    template: `
      <LismList v-bind="args">
        <LismListItem>リスト項目 1</LismListItem>
        <LismListItem>リスト項目 2</LismListItem>
        <LismListItem>リスト項目 3</LismListItem>
      </LismList>
    `,
  }),
  args: {
    g: '10',
  },
}

export const Ordered: Story = {
  render: (args) => ({
    components: { LismList, LismListItem },
    setup() {
      return { args }
    },
    template: `
      <LismList v-bind="args">
        <LismListItem>手順 1</LismListItem>
        <LismListItem>手順 2</LismListItem>
        <LismListItem>手順 3</LismListItem>
      </LismList>
    `,
  }),
  args: {
    as: 'ol',
    g: '10',
  },
}

export const DescriptionList: Story = {
  render: (args) => ({
    components: { LismList, LismListItem },
    setup() {
      return { args }
    },
    template: `
      <LismList v-bind="args">
        <LismListItem as="dt" fw="bold">LismCSS</LismListItem>
        <LismListItem as="dd">ユーティリティファーストなCSSフレームワーク</LismListItem>
        <LismListItem as="dt" fw="bold" mt="10">Vue.js</LismListItem>
        <LismListItem as="dd">Progressive Framework</LismListItem>
      </LismList>
    `,
  }),
  args: {
    as: 'dl',
  },
}
