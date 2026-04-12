import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismTileGrid, LismBox, LismCenter } from '@/components'

const meta: Meta<typeof LismTileGrid> = {
  title: 'Components/Layout/TileGrid',
  component: LismTileGrid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LismTileGrid>

export const Default: Story = {
  render: (args) => ({
    components: { LismTileGrid, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismTileGrid v-bind="args">
        <LismBox p="20" bgc="base-2" bd>1</LismBox>
        <LismBox p="20" bgc="base-2" bd>2</LismBox>
        <LismBox p="20" bgc="base-2" bd>3</LismBox>
        <LismBox p="20" bgc="base-2" bd>4</LismBox>
      </LismTileGrid>
    `,
  }),
  args: {
    cols: 3,
    rows: 3,
    'min-h': '50svh',
    g: '20',
  },
}

export const Grid3x2: Story = {
  render: (args) => ({
    components: { LismTileGrid, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismTileGrid v-bind="args">
        <LismBox p="20" bgc="base-2" bd v-for="i in 6" :key="i">{{ i }}</LismBox>
      </LismTileGrid>
    `,
  }),
  args: {
    cols: 3,
    rows: 2,
    g: '10',
  },
}

export const Responsive: Story = {
  render: (args) => ({
    components: { LismTileGrid, LismBox },
    setup() {
      return { args }
    },
    template: `
      <LismTileGrid v-bind="args">
        <LismBox p="20" bgc="base-2" bd v-for="i in 6" :key="i">{{ i }}</LismBox>
      </LismTileGrid>
    `,
  }),
  args: {
    cols: { base: 1, sm: 2, md: 3 },
    g: '20',
  },
}

export const AreaSpec: Story = {
  render: (args) => ({
    components: { LismTileGrid, LismBox, LismCenter },
    setup() {
      return { args }
    },
    template: `
    <LismTileGrid v-bind="args">
      <LismBox p="20" bgc="base-2"> item1 </LismBox>
      <LismBox p="20" bgc="base-2"> item2 </LismBox>
      <LismBox p="20" bgc="base-2"> item3 </LismBox>
      <LismBox p="20" bgc="base-2"> item4 </LismBox>
      <LismBox p="20" bgc="base-2" gc="span 2"> item5 </LismBox>
      <LismCenter gc="3" gr="1 / -1" p="20" bgc="blue:20%"> item6 </LismCenter>
    </LismTileGrid>
    `,
  }),
  args: {
    cols: 3,
    rows: 3,
    g: '5',
    'min-h': '50svh',
  },
}

export const Dense: Story = {
  render: (args) => ({
    components: { LismTileGrid, LismBox },
    setup() {
      return { args }
    },
    template: `
    <LismTileGrid v-bind="args">
      <LismBox :gc="['1 / -1', 'span 2']" :gr="['span 2', '1 / -1']" p="20" bgc="base-2">
        A
      </LismBox>
      <LismBox p="20" bgc="green:20%"> B </LismBox>
      <LismBox p="20" bgc="blue:20%"> C </LismBox>
      <LismBox p="20" bgc="red:20%"> D </LismBox>
      <LismBox p="20" bgc="purple:20%"> E </LismBox>
    </LismTileGrid>
    `,
  }),
  args: {
    cols: { base: 2, sm: 3 },
    rows: 4,
    'min-h': '50svh',
    gaf: 'row dense',
  },
}
