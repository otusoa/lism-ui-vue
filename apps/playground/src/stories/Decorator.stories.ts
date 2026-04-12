import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismDecorator, LismBox } from '@/components'

const meta: Meta<typeof LismDecorator> = {
  title: 'Components/Atomic/Decorator',
  component: LismDecorator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismDecorator>

export const Default: Story = {
  render: (args) => ({
    components: { LismDecorator, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismBox p="40" bd pos="r">
        <LismDecorator v-bind="args" />
        <p style="position: relative; z-index: 1;">Decorator is behind this text if positioned correctly.</p>
      </LismBox>
    `,
  }),
  args: {
    bgc: 'brand',
    size: '100%',
    pos: 'a',
    t: '0',
    l: '0',
    css: { opacity: '0.2' },
  },
}

export const Shape: Story = {
  render: (args) => ({
    components: { LismDecorator },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <LismDecorator v-bind="args" bgc="brand" size="50px" />
        <LismDecorator v-bind="args" bgc="accent" size="80px" bdrs="full" />
        <LismDecorator v-bind="args" bgc="base-2" size="60px" :css="{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }" />
      </div>
    `,
  }),
  args: {},
}

export const AbsolutePositioning: Story = {
  render: (args) => ({
    components: { LismDecorator, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismBox p="30" pos="relative">
        <p>
          Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor Incididunt ut. Labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <LismDecorator size="1.25em" pos="absolute" t="0" l="0" bd-x-s bd-y-s bdc="current" />
        <LismDecorator size="1.25em" pos="absolute" r="0" b="0" bd-x-e bd-y-e bdc="current" />
      </LismBox>
    `,
  }),
  args: {},
}
