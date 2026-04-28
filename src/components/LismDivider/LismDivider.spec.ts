import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { LismDivider } from '.'

describe('LismDivider', () => {
  it('renders hr element by default with aria-hidden="true"', () => {
    const wrapper = mount(LismDivider)
    expect(wrapper.element.tagName).toBe('HR')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('renders with custom as prop', () => {
    const wrapper = mount(LismDivider, {
      props: { as: 'hr' }
    })
    expect(wrapper.element.tagName).toBe('HR')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })
})
