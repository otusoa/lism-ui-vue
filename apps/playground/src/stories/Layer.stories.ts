import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismLayer, LismFrame, LismBox, LismText } from '@/components'

const meta: Meta = {
  title: 'Components/Layout/Layer',
  component: LismLayer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => ({
    components: { LismLayer, LismFrame, LismBox, LismText },
    setup() {
      return { args }
    },
    template: `
      <LismFrame ar="16/9" pos="rel" max-w="500px">
        <img src="https://cdn.lism-css.com/img/a-1.jpg" alt="" style="width:100%; height:100%; object-fit:cover;" />
        <LismLayer v-bind="args" p="20" d="f" ai="fe">
          <LismText c="white" fw="bold" fz="xl" bgc="rgb(0 0 0 / 40%)" p="10">
            Caption on Layer
          </LismText>
        </LismLayer>
      </LismFrame>
    `,
  }),
  args: {
    t: '0',
    l: '0',
    w: '100%',
    h: '100%',
  },
}

export const Blur: Story = {
  render: (args) => ({
    components: { LismLayer, LismFrame, LismBox, LismText },
    setup() {
      return { args }
    },
    template: `
      <LismFrame ar="16/9" pos="rel" max-w="500px">
        <img src="https://cdn.lism-css.com/img/a-2.jpg" alt="" style="width:100%; height:100%; object-fit:cover;" />
        <LismLayer v-bind="args" d="f" ai="c" jc="c">
          <LismText fz="xxl" fw="bold" c="white" style="text-shadow: 0 2px 4px rgba(0,0,0,0.5)">
            BLUR OVERLAY
          </LismText>
        </LismLayer>
      </LismFrame>
    `,
  }),
  args: {
    style: { blur: '8px' },
    bgc: 'rgb(0 0 0 / 20%)',
    w: '100%',
    h: '100%',
  },
}
