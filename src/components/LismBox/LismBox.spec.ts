import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { LismBox } from './index'

describe('LismBox component', () => {
  it('should render with layout="box" (class "l--box")', () => {
    const wrapper = mount(LismBox)
    expect(wrapper.classes()).toContain('l--box')
  })

  it('should render as different tag', () => {
    const wrapper = mount(LismBox, {
      props: { as: 'section' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })

  it('should apply lism props', () => {
    const wrapper = mount(LismBox, {
      props: { p: '20', bgc: 'brand' },
    })
    expect(wrapper.classes()).toContain('-p:20')
    expect(wrapper.classes()).toContain('-bgc:brand')
  })

  it('should render slot content', () => {
    const wrapper = mount(LismBox, {
      slots: {
        default: 'Box Content',
      },
    })
    expect(wrapper.text()).toBe('Box Content')
  })
})
