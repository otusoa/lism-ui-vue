import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LismDecorator from './LismDecorator.vue'

describe('LismDecorator', () => {
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
