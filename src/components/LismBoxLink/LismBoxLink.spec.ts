import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { LismLinkBox } from './index'

describe('LismLinkBox component', () => {
  it('should render with class "is--boxLink"', () => {
    const wrapper = mount(LismLinkBox)
    expect(wrapper.classes()).toContain('is--boxLink')
  })

  it('should render as div by default', () => {
    const wrapper = mount(LismLinkBox)
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })

  it('should render as a tag when href is provided', () => {
    const wrapper = mount(LismLinkBox, {
      props: { href: '#' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    expect(wrapper.attributes('href')).toBe('#')
  })

  it('should render as different tag via props', () => {
    const wrapper = mount(LismLinkBox, {
      props: { as: 'article' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('article')
  })

  it('should render slot content', () => {
    const wrapper = mount(LismLinkBox, {
      slots: {
        default: 'LinkBox Content',
      },
    })
    expect(wrapper.text()).toBe('LinkBox Content')
  })
})
