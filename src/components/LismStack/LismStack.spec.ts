import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { LismStack } from './index'

describe('LismStack component', () => {
  it('should render with l--stack class', () => {
    const wrapper = mount(LismStack)
    expect(wrapper.classes()).toContain('l--stack')
  })

  it('should handle gap prop', () => {
    const wrapper = mount(LismStack, {
      props: { g: '30' }
    })
    expect(wrapper.classes()).toContain('-g:30')
  })
})
