import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Lism } from './index'

describe('Lism component', () => {
  it('should render correct "as"', () => {
    const wrapper = mount(Lism, {
      props: { as: 'section' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })

  it('should render correct "as" component/as', () => {
    const wrapper = mount(Lism, {
      props: { as: 'span' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })

  it('should render slot content', () => {
    const wrapper = mount(Lism, {
      slots: {
        default: '<div class="child">Hello</div>',
      },
    })
    expect(wrapper.find('.child').exists()).toBe(true)
    expect(wrapper.text()).toBe('Hello')
  })

  it('should apply lism props as classes and styles', () => {
    const wrapper = mount(Lism, {
      props: {
        p: '20',
        bgc: 'brand',
        style: { color: 'red' },
      },
    })

    expect(wrapper.classes()).toContain('-p:20')
    expect(wrapper.classes()).toContain('-bgc:brand')
    expect(wrapper.attributes('style')).toContain('color: red')
  })

  it('should pass through non-lism attributes', () => {
    const wrapper = mount(Lism, {
      attrs: {
        id: 'test-id',
        'data-test': 'value',
      },
    })
    expect(wrapper.attributes('id')).toBe('test-id')
    expect(wrapper.attributes('data-test')).toBe('value')
  })

  it('should overwrite class and style with exProps', () => {
    const wrapper = mount(Lism, {
      props: {
        p: '10',
        exProps: {
          class: 'extra-class',
          style: { padding: '50px' },
        },
      },
    })

    // class should be overwritten by exProps.class
    expect(wrapper.classes()).not.toContain('-p:10')
    expect(wrapper.classes()).toContain('extra-class')

    // style should be overwritten by exProps.style
    expect(wrapper.attributes('style')).toContain('padding: 50px')
  })
})
