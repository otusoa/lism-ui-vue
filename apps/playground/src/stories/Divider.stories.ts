import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismDivider } from '../../../../src/components'
import LismBox from '@/components/LismBox/LismBox.vue'
import LismFlex from '@/components/LismFlex/LismFlex.vue'

const meta = {
  title: 'Components/Atomic/LismDivider',
  component: LismDivider,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element or Vue component to render as.',
    },
  },
} satisfies Meta<typeof LismDivider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { LismDivider },
    setup() {
      return { args }
    },
    template: `
      <div>
        <p>Text before divider</p>
        <LismDivider v-bind="args" />
        <p>Text after divider</p>
      </div>
    `,
  }),
  args: {
    as: 'hr',
  },
}

export const AsDivider: Story = {
  render: (args) => ({
    components: { LismDivider },
    setup() {
      return { args }
    },
    template: `
      <LismBox bgc="base-2" py="40" ta="center">...Contents...</LismBox>
<LismDivider bds="dotted" bdw="4px" bdc="blue" />
<LismBox bgc="base-2" py="40" ta="center">...Contents...</LismBox>
    `,
  }),
  args: {
    as: 'hr',
  },
}

export const flex: Story = {
  render: (args) => ({
    components: { LismDivider, LismBox, LismFlex },
    setup() {
      return { args }
    },
    template: `
      <LismFlex ai="center" g="20">
  <LismBox fx="1" bgc="base-2" py="40" ta="center">
    ...Contents...
  </LismBox>
  <LismDivider wm="vertical-rl" bds="dashed" bdw="2px" aslf="stretch" />
  <LismBox fx="1" bgc="base-2" py="40" ta="center">
    ...Contents...
  </LismBox>
</LismFlex>
    `,
  }),
  args: {
    as: 'hr',
  },
}
