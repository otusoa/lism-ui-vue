import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LismBox, LismText, LismStack } from '@/components'

const meta: Meta = {
  title: 'Labo/Hover',
  tags: ['autodocs'],
}

export default meta

export const Basic: StoryObj = {
  render: () => ({
    components: { LismBox },
    template: `
      <LismStack g="20">
        <LismBox p="30" bgc="base-2" hov="o" setTransition>
          Hover me (hov="o")
        </LismBox>
        <LismBox p="30" bgc="base-2" :hov="{ bgc: 'brand', c: 'white' }" setTransition>
          Hover me (Object: brand bgc)
        </LismBox>
        <LismBox p="30" bd="-" :hov="{ bdc: 'accent', bdw: '2px' }" setTransition>
          Hover me (Border changes)
        </LismBox>
      </LismStack>
    `,
  }),
}

export const ParentChild: StoryObj = {
  render: () => ({
    components: { LismBox, LismText },
    template: `
      <LismBox p="40" bgc="base-2" setHov setTransition :hov="{ bgc: 'brand-faint' }">
        <LismText>Parent Box (setHov)</LismText>
        <LismBox p="20" bgc="white" bd="-" hov="to:zoom" setTransition>
          Child Box (hov="to:zoom")
        </LismBox>
        <LismText hov="to:show" :style="{marginTop: '10px'}">
          Hidden until parent hover (hov="to:show")
        </LismText>
      </LismBox>
    `,
  }),
}

export const CustomTransition: StoryObj = {
  render: () => ({
    components: { LismBox },
    template: `
      <LismStack g="20">
        <LismBox p="30" bgc="base-2" 
          :hov="{ bgc: 'accent', c: 'white', duration: '1s', easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' }" 
          setTransition
        >
          Slow & Bouncy (1s duration)
        </LismBox>
      </LismStack>
    `,
  }),
}
