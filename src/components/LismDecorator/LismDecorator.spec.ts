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
        as: 'div'
      }
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('should allow overriding aria-hidden', () => {
    const wrapper = mount(LismDecorator, {
      attrs: {
        'aria-hidden': 'false'
      }
    })
    // 外部からの属性指定で上書きできること
    expect(wrapper.attributes('aria-hidden')).toBe('false')
  })

  it('should apply lism props as classes or styles', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        bgc: 'brand',
        p: '10'
      }
    })
    // プリセット値やトークン値はクラスとして出力される
    expect(wrapper.classes()).toContain('-bgc:brand')
    expect(wrapper.classes()).toContain('-p:10')
  })

  it('should convert size prop to width and aspect-ratio', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        size: '100px'
      }
    })
    // '100px' はカスタム値なので、クラスは '-w'、スタイルに '--w' が出力される
    expect(wrapper.classes()).toContain('-w')
    expect(wrapper.classes()).toContain('-ar:1/1') // '1/1' はプリセット
    expect(wrapper.attributes('style')).toContain('--w: 100px')
  })

  it('should pass clipPath and boxSizing to style', () => {
    const wrapper = mount(LismDecorator, {
      props: {
        clipPath: 'circle(50%)',
        boxSizing: 'border-box'
      }
    })
    // console.log('HTML Output:', wrapper.html())

    // css プロパティ経由で style に出力される。Vueは自動でkebab-caseに変換する。
    const style = wrapper.attributes('style') || ''
    expect(style).toContain('clip-path: circle(50%)')
    expect(style).toContain('box-sizing: border-box')
  })
})
