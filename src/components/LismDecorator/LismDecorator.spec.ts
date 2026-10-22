import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LismDecorator from './LismDecorator.vue'

describe('LismDecorator', () => {
  it.each([false, 'false'] as const)('allows aria-hidden=%j to override the default', (value) => {
    const wrapper = mount(LismDecorator, {
      attrs: { 'aria-hidden': value },
    })

    expect(wrapper.attributes('aria-hidden')).toBe('false')
  })

  it('applies object css, including custom properties and numeric zero', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        css: { color: 'red', opacity: 0, '--custom': 'value' },
      },
    })
    const style = (wrapper.element as HTMLElement).style

    expect(style.color).toBe('red')
    expect(style.opacity).toBe('0')
    expect(style.getPropertyValue('--custom')).toBe('value')
    expect(wrapper.attributes('css')).toBeUndefined()
  })

  it('prioritizes size over w and ar, matching the atomic decorator behavior', () => {
    const wrapper = mount(LismDecorator, {
      props: { size: '100px' },
      attrs: { w: '200px', ar: '2/1' },
    })

    expect((wrapper.element as HTMLElement).style.getPropertyValue('--w')).toBe('100px')
    expect(wrapper.classes()).toContain('-ar:1/1')
    expect(wrapper.classes()).not.toContain('-ar:2/1')
    expect(wrapper.classes().filter((name) => name === 'a--decorator')).toHaveLength(1)
    expect(wrapper.attributes('size')).toBeUndefined()
  })

  it('should render correctly with default props', () => {
    const wrapper = mount(LismDecorator)

    // デフォルトで span タグでレンダリングされること
    expect(wrapper.element.tagName).toBe('SPAN')

    // a--decorator クラスが付与されていること
    expect(wrapper.classes()).toContain('a--decorator')

    // デフォルトで aria-hidden="true" が付与されていること
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('should allow changing the tag', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        as: 'div',
      },
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('should apply lism props as classes', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        bgc: 'brand',
        p: '10',
      },
    })
    expect(wrapper.classes()).toContain('-bgc:brand')
    expect(wrapper.classes()).toContain('-p:10')
  })

  it('should convert size prop to width and aspect-ratio', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        size: '100px',
      },
    })
    // '100px' はカスタム値なので、スタイルに '--w' が出力され、ar: 1/1 はクラス '-ar:1/1' になる
    expect(wrapper.classes()).toContain('-ar:1/1')
    expect(wrapper.attributes('style')).toContain('--w: 100px')
  })

  it('should render slot content', () => {
    const wrapper = mount(LismDecorator, {
      slots: {
        default: 'Decorator Content',
      },
    })
    expect(wrapper.text()).toBe('Decorator Content')
  })
})
