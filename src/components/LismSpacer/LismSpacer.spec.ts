import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { LismSpacer } from '.'

describe('LismSpacer', () => {
  it('renders div by default with atomic="spacer" and aria-hidden="true"', () => {
    const wrapper = mount(LismSpacer)
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('a--spacer')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('renders with custom as prop', () => {
    const wrapper = mount(LismSpacer, {
      props: { as: 'span' }
    })
    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })
})
