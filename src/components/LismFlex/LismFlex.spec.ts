import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { LismFlex } from './index'

describe('LismFlex component', () => {
  it('should render with l--flex class', () => {
    const wrapper = mount(LismFlex)
    expect(wrapper.classes()).toContain('l--flex')
  })

  it('should handle flex alignment props', () => {
    const wrapper = mount(LismFlex, {
      props: {
        ai: 'center',
        jc: 'between',
        g: '20'
      }
    })
    expect(wrapper.classes()).toContain('-ai:center')
    expect(wrapper.classes()).toContain('-jc:between')
    expect(wrapper.classes()).toContain('-g:20')
  })

  it('should handle direction', () => {
    const wrapper = mount(LismFlex, {
      props: { fxd: 'column' }
    })
    expect(wrapper.classes()).toContain('-fxd:column')
  })
})
