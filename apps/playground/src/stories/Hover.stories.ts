import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismBox, LismText } from '@/components'
import LismStack from '@/components/LismStack/LismStack.vue'

const meta: Meta = {
  title: 'Labo/Hover',
  tags: ['autodocs'],
}

export default meta

export const Basic: StoryObj = {
  render: () => ({
    components: { LismBox, LismStack },
    template: `
      <LismStack g="20">
        <LismBox p="30" bgc="base-2" hov="-o" has-transition="opacity">
          Hover me (hov="-o")
        </LismBox>
        <LismBox p="30" bgc="base-2" :hov="{ bgc: 'brand', c: 'white' }" has-transition="background-color, color">
          Hover me (Object: brand bgc)
        </LismBox>
        <LismBox p="30" bd :hov="{ bdc: 'accent' }" has-transition="border-color">
          Hover me (Border changes)
        </LismBox>
      </LismStack>
    `,
  }),
}

export const ParentChild: StoryObj = {
  render: () => ({
    components: { LismBox, LismText, LismStack },
    template: `
      <LismBox p="40" bgc="base-2" set="hov" has-transition="background-color" :hov="{ bgc: 'brand-faint' }">
        <LismText>Parent Box (set="hov")</LismText>
        <LismBox p="20" bgc="white" bd hov="in:zoom" has-transition="scale">
          Child Box (hov="in:zoom")
        </LismBox>
        <LismText hov="in:show" mt="10" has-transition="opacity, visibility">
          Hidden until parent hover (hov="in:show")
        </LismText>
      </LismBox>
    `,
  }),
}

export const CustomTransition: StoryObj = {
  render: () => ({
    components: { LismBox, LismStack },
    template: `
      <LismStack g="20">
        <LismBox p="30" bgc="base-2"
          :hov="{ bgc: 'accent', c: 'white' }"
          has-transition="background-color, color"
          :style="{ '--duration': '1s', '--ease': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' }"
        >
          Slow & Bouncy (1s duration)
        </LismBox>
      </LismStack>
    `,
  }),
}
