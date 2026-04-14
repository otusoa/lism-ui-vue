import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismLinkBox, LismGroup, LismLink, LismText } from '@/components'

const meta: Meta<typeof LismLinkBox> = {
  title: 'Components/Semantic/LinkBox',
  component: LismLinkBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismLinkBox>

export const Default: Story = {
  render: (args) => ({
    components: { LismLinkBox },
    setup() {
      return { args }
    },
    template: `
      <LismLinkBox v-bind="args">
        <p>This whole box is a link.</p>
      </LismLinkBox>
    `,
  }),
  args: {
    href: '#',
    p: '20',
    bgc: 'base',
    bd: true,
    hov: 'o',
  },
}

export const Minimal: Story = {
  render: (args) => ({
    components: { LismLinkBox },
    setup() {
      return { args }
    },
    template: `
      <LismLinkBox v-bind="args">
        Minimal LinkBox
      </LismLinkBox>
    `,
  }),
  args: {
    href: '#',
    p: '10',
    bd: true,
  },
}

export const Complex: Story = {
  render: (args) => ({
    components: { LismLinkBox, LismGroup, LismLink, LismText },
    setup() {
      return { args }
    },
    template: `
      <LismLinkBox v-bind="args">
        <LismGroup fz="xl" fw="bold">
          <LismLink class="u--expandedLink" href="#linkbox-demo02">
            Heading link text
          </LismLink>
        </LismGroup>
        <LismText c="text-2" lh="s" my="15">
          Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor Incididunt ut. Labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </LismText>
        <LismGroup id="inner-link02" my="10">
          <a href="#inner-link02" class="-hov:o">
            Inner Link
          </a>
        </LismGroup>
      </LismLinkBox>
    `,
  }),
  args: {
    p: '30',
    bgc: 'base',
    bd: true,
    bdrs: '30',
    set: 'transition',
    hov: 'bxsh',
  },
}
