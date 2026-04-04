import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismFrame, LismBox } from '@/components'

const meta: Meta<typeof LismFrame> = {
  title: 'Components/Layout/Frame',
  component: LismFrame,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismFrame>

export const Ratio16_9: Story = {
  render: (args) => ({
    components: { LismFrame, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFrame v-bind="args" max-w="400px" bgc="base-2" bd>
        <LismBox d="f" ai="c" jc="c" h="100%">16 / 9 Content</LismBox>
      </LismFrame>
    `,
  }),
  args: {
    ar: '16/9',
  },
}

export const Square: Story = {
  render: (args) => ({
    components: { LismFrame, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismFrame v-bind="args" max-w="200px" bgc="brand" c="white">
        <LismBox d="f" ai="c" jc="c" h="100%">1 / 1</LismBox>
      </LismFrame>
    `,
  }),
  args: {
    ar: '1/1',
  },
}

export const Video: Story = {
  render: (args) => ({
    components: { LismFrame },
    setup() {
      return { args }
    },
    template: `
      <LismFrame v-bind="args" max-w="600px">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </LismFrame>
    `,
  }),
  args: {
    ar: '16/9',
  },
}
