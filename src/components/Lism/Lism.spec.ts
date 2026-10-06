import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { Lism } from './index'

describe('Lism component', () => {
  const bindings = {
    class: ['base', [{ active: true, disabled: false }]],
    className: ['alias', ['nested']],
    style: ['color: red; --custom: first', [{ color: 'blue', opacity: 0 }, { '--custom': 'last' }]],
    layout: 'withSide',
    sideW: '20rem',
  } as const

  it('renders normalized class and style bindings in the DOM', () => {
    const wrapper = mount(Lism, { attrs: bindings })
    expect(wrapper.classes()).toEqual(['base', 'active', 'alias', 'nested', 'l--withSide'])
    const style = (wrapper.element as HTMLElement).style
    expect(style.color).toBe('blue')
    expect(style.opacity).toBe('0')
    expect(style.getPropertyValue('--custom')).toBe('last')
    expect(style.getPropertyValue('--sideW')).toBe('20rem')
  })

  it('renders normalized class and style bindings on the server', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(Lism, bindings) }))
    expect(html).toContain('class="base active alias nested l--withSide"')
    expect(html).toContain('color:blue')
    expect(html).toContain('opacity:0')
    expect(html).toContain('--custom:last')
    expect(html).toContain('--sideW:20rem')
  })

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
