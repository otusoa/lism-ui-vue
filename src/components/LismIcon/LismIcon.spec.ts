import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createSSRApp, h, type FunctionalComponent } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { PhHeart } from '@phosphor-icons/vue'
import { LismIcon } from './index'

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 12h16" /></svg>'

describe('LismIcon component', () => {
  it('renders a decorative SVG with the atomic class and default dimensions', () => {
    const wrapper = mount(LismIcon)
    expect(wrapper.classes()).toContain('a--icon')
    expect(wrapper.element.tagName.toLowerCase()).toBe('svg')
    expect(wrapper.attributes('width')).toBe('1em')
    expect(wrapper.attributes('height')).toBe('1em')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('updates accessibility attributes when the label changes', async () => {
    const wrapper = mount(LismIcon, { props: { label: 'Home Icon' } })
    expect(wrapper.attributes('aria-label')).toBe('Home Icon')
    expect(wrapper.attributes('role')).toBe('img')
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()

    await wrapper.setProps({ label: undefined })
    expect(wrapper.attributes('aria-hidden')).toBe('true')
    expect(wrapper.attributes('aria-label')).toBeUndefined()
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('renders a Vue icon component passed directly to icon', () => {
    const wrapper = mount(LismIcon, { props: { icon: PhHeart, fz: '2xl', label: 'Heart' } })
    expect(wrapper.findComponent(PhHeart).exists()).toBe(true)
    expect(wrapper.find('path').exists()).toBe(true)
    expect(wrapper.classes()).toContain('a--icon')
    expect(wrapper.classes()).toContain('-fz:2xl')
    expect(wrapper.attributes('aria-label')).toBe('Heart')
  })

  it('renders a functional Vue icon component', () => {
    const CustomIcon: FunctionalComponent = (props) =>
      h('svg', { ...props, viewBox: '0 0 24 24' }, [h('circle', { cx: 12, cy: 12, r: 8 })])
    const wrapper = mount(LismIcon, { props: { icon: CustomIcon, label: 'Circle' } })
    expect(wrapper.find('circle').exists()).toBe(true)
    expect(wrapper.attributes('viewBox')).toBe('0 0 24 24')
    expect(wrapper.attributes('role')).toBe('img')
  })

  it('renders an external component using as and forwards exProps without parsing them', () => {
    const wrapper = mount(LismIcon, {
      props: { as: PhHeart, exProps: { weight: 'fill', size: '3em', p: '20' }, fz: 'xl' },
    })
    const icon = wrapper.findComponent(PhHeart)
    expect(icon.props('weight')).toBe('fill')
    expect(icon.props('size')).toBe('3em')
    expect(wrapper.attributes('p')).toBe('20')
    expect(wrapper.classes()).not.toContain('-p:20')
    expect(wrapper.classes()).toContain('-fz:xl')
  })

  it('forwards icon object props, with direct props and exProps taking precedence', () => {
    const wrapper = mount(LismIcon, {
      props: {
        icon: { as: PhHeart, size: '1em', weight: 'light' },
        size: '2em',
        exProps: { weight: 'bold' },
      },
    })
    const icon = wrapper.findComponent(PhHeart)
    expect(icon.props('size')).toBe('2em')
    expect(icon.props('weight')).toBe('bold')
  })

  it('renders native SVG attributes and content from an SVG string', () => {
    const wrapper = mount(LismIcon, { props: { icon: svgIcon } })
    expect(wrapper.attributes('viewBox')).toBe('0 0 24 24')
    expect(wrapper.attributes('fill')).toBe('none')
    expect(wrapper.attributes('stroke-width')).toBe('2')
    expect(wrapper.find('path').attributes('d')).toBe('M4 12h16')
    expect(wrapper.element.querySelector('svg')).toBeNull()
    expect(wrapper.find('path').element.namespaceURI).toBe('http://www.w3.org/2000/svg')
  })

  it('merges SVG string classes and styles with Vue class and style bindings', () => {
    const wrapper = mount(LismIcon, {
      props: {
        icon: '<svg viewBox="0 0 24 24" class="source-icon" style="color:red;opacity:0.5"><path /></svg>',
      },
      attrs: {
        class: ['user-icon', { active: true }],
        style: [{ color: 'blue' }, { '--custom': 'value' }],
      },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['a--icon', 'source-icon', 'user-icon', 'active']),
    )
    const element = wrapper.element as SVGElement
    expect(element.style.color).toBe('blue')
    expect(element.style.opacity).toBe('0.5')
    expect(element.style.getPropertyValue('--custom')).toBe('value')
  })

  it('prioritizes explicit SVG attributes and exProps over embedded attributes', () => {
    const wrapper = mount(LismIcon, {
      props: {
        icon: '<svg viewBox="0 0 16 16" width="16" height="16" stroke-width="1" aria-hidden="true"><path /></svg>',
        viewBox: '0 0 24 24',
        width: 32,
        size: '2em',
        strokeWidth: 2,
        exProps: { height: 48, 'stroke-width': 3 },
        label: 'Arrow',
      },
    })
    expect(wrapper.attributes('viewBox')).toBe('0 0 24 24')
    expect(wrapper.attributes('width')).toBe('32')
    expect(wrapper.attributes('height')).toBe('48')
    expect(wrapper.attributes('stroke-width')).toBe('3')
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()
    expect(wrapper.attributes('role')).toBe('img')
  })

  it('accepts self-closing SVG strings and single-quoted attributes', () => {
    const wrapper = mount(LismIcon, { props: { icon: "<svg viewBox='0 0 24 24' />" } })
    expect(wrapper.attributes('viewBox')).toBe('0 0 24 24')
    expect(wrapper.classes()).toContain('a--icon')
  })

  it('reacts to a new SVG string', async () => {
    const wrapper = mount(LismIcon, { props: { icon: svgIcon } })
    await wrapper.setProps({
      icon: '<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="4" /></svg>',
    })
    expect(wrapper.attributes('viewBox')).toBe('0 0 16 16')
    expect(wrapper.find('path').exists()).toBe(false)
    expect(wrapper.find('circle').exists()).toBe(true)
  })

  it('renders SVG strings on the server', async () => {
    const html = await renderToString(
      createSSRApp({
        render: () => h(LismIcon, { icon: svgIcon, label: 'Arrow' }),
      }),
    )
    expect(html).toContain('viewBox="0 0 24 24"')
    expect(html).toContain('stroke-width="2"')
    expect(html).toContain('<path d="M4 12h16"></path>')
    expect(html).toContain('aria-label="Arrow"')
  })

  it('renders custom SVG content via slot', () => {
    const wrapper = mount(LismIcon, {
      props: { viewBox: '0 0 100 100' },
      slots: { default: '<circle cx="50" cy="50" r="40" />' },
    })
    expect(wrapper.attributes('viewBox')).toBe('0 0 100 100')
    expect(wrapper.find('circle').exists()).toBe(true)
  })

  it('removes executable content and attributes from the entire SVG string', () => {
    const wrapper = mount(LismIcon, {
      props: {
        icon: `<svg viewBox="0 0 24 24" onload="alert(1)" xmlns:xlink="http://www.w3.org/1999/xlink">
          <script>alert(1)</script>
          <style>body { display:none }</style>
          <foreignObject><div xmlns="http://www.w3.org/1999/xhtml" onclick="alert(1)">unsafe</div></foreignObject>
          <image href="missing.png" onerror="alert(1)" />
          <a href="jav&#x61;script:alert(1)"><path d="M4 12h16" onclick="alert(1)" /></a>
          <use xlink:href="javascript:alert(1)" />
          <use href="https://example.com/icon.svg#shape" />
        </svg>`,
      },
    })
    expect(wrapper.attributes('onload')).toBeUndefined()
    expect(wrapper.find('script, style, foreignObject, div').exists()).toBe(false)
    expect(wrapper.find('image').attributes('onerror')).toBeUndefined()
    expect(wrapper.find('a').attributes('href')).toBeUndefined()
    for (const use of wrapper.findAll('use')) {
      expect(use.attributes('xlink:href')).toBeUndefined()
      expect(use.attributes('href')).toBeUndefined()
    }
    expect(wrapper.find('path').attributes('onclick')).toBeUndefined()
    expect(wrapper.find('path').attributes('d')).toBe('M4 12h16')
  })

  it('preserves gradients, masks, filters, internal references and decoded attributes', () => {
    const wrapper = mount(LismIcon, {
      props: {
        icon: `<svg viewBox="0 0 24 24" aria-label="A &amp; B">
          <defs>
            <linearGradient id="gradient"><stop offset="0" stop-color="red" /><stop offset="1" stop-color="blue" /></linearGradient>
            <mask id="mask"><rect width="24" height="24" fill="white" /></mask>
            <filter id="blur"><feGaussianBlur stdDeviation="1" /></filter>
            <path id="shape" d="M4 12h16" />
          </defs>
          <use href="#shape" fill="url(#gradient)" mask="url(#mask)" filter="url(#blur)" />
        </svg>`,
      },
    })
    expect(wrapper.find('linearGradient').attributes('id')).toBe('gradient')
    expect(wrapper.findAll('stop')).toHaveLength(2)
    expect(wrapper.find('mask rect').attributes('fill')).toBe('white')
    expect(wrapper.find('feGaussianBlur').attributes('stdDeviation')).toBe('1')
    expect(wrapper.find('use').attributes()).toMatchObject({
      href: '#shape',
      fill: 'url(#gradient)',
      mask: 'url(#mask)',
      filter: 'url(#blur)',
    })
    expect(wrapper.attributes('aria-label')).toBe('A & B')
  })

  it('uses size for SVG dimensions and fz for font size tokens', () => {
    const wrapper = mount(LismIcon, { props: { size: '2em', fz: '2xl' } })
    expect(wrapper.attributes('width')).toBe('2em')
    expect(wrapper.attributes('height')).toBe('2em')
    expect(wrapper.attributes('size')).toBeUndefined()
    expect(wrapper.classes()).toContain('-fz:2xl')
  })

  it('preserves explicit dimensions, including zero, when size is set', () => {
    const wrapper = mount(LismIcon, { props: { size: '2em', width: 0, height: 48 } })
    expect(wrapper.attributes('width')).toBe('0')
    expect(wrapper.attributes('height')).toBe('48')
  })

  it('preserves native SVG attribute names and does not convert weight to stroke width', () => {
    const wrapper = mount(LismIcon, {
      props: { strokeWidth: 2 },
      attrs: { 'stroke-linecap': 'round', weight: 'bold' },
    })
    expect(wrapper.attributes('stroke-width')).toBe('2')
    expect(wrapper.attributes('stroke-linecap')).toBe('round')
    expect(wrapper.attributes('weight')).toBeUndefined()
  })

  it('renders decorative images and supports a label for informative images', async () => {
    const wrapper = mount(LismIcon, { props: { src: 'icon.png', alt: 'icon' } })
    expect(wrapper.element.tagName.toLowerCase()).toBe('img')
    expect(wrapper.attributes('src')).toBe('icon.png')
    expect(wrapper.attributes('alt')).toBe('icon')
    expect(wrapper.attributes('aria-hidden')).toBe('true')
    expect(wrapper.attributes('viewBox')).toBeUndefined()

    await wrapper.setProps({ label: 'Image Icon' })
    expect(wrapper.attributes('aria-hidden')).toBeUndefined()
    expect(wrapper.attributes('aria-label')).toBe('Image Icon')
    expect(wrapper.attributes('role')).toBe('img')
  })
})
