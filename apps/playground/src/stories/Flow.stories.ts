import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LismFlow from '@/components/LismFlow/LismFlow.vue'
import LismBox from '@/components/LismBox/LismBox.vue'

const meta: Meta<typeof LismFlow> = {
  title: 'Layout/Flow',
  component: LismFlow,
  tags: ['autodocs'],
  argTypes: {
    flow: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof LismFlow>

export const Default: Story = {
  render: (args) => ({
    components: { LismFlow },
    setup() {
      return { args }
    },
    template: `
      <LismFlow v-bind="args" style="outline: 1px dashed #ccc; padding: 20px;">
        <h2>Flow Layout Module</h2>
        <p>This is a paragraph inside the Flow layout. The vertical spacing (margin-block) between elements is managed by the <code>flow</code> prop.</p>
        <h3>Sub Heading</h3>
        <p>Notice how headings might have more spacing compared to regular paragraphs depending on the lism-css configuration.</p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
        <p>Another paragraph to show the flow continues.</p>
      </LismFlow>
    `,
  }),
  args: {
    flow: 's',
  },
}

export const SpacingSizes: Story = {
  render: (args) => ({
    components: { LismFlow, LismBox },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <section>
          <h4>flow="s" (Small Spacing)</h4>
          <LismFlow flow="s" bd p="20">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
          </LismFlow>
        </section>

        <section>
          <h4>flow="40" (Large Spacing)</h4>
          <LismFlow flow="40" bd p="20">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
          </LismFlow>
        </section>
      </div>
    `,
  }),
  args: {},
}
