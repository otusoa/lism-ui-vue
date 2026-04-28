import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { LismIcon } from './index'

describe('LismIcon component', () => {
	it('should render with atomic="icon" (class "a--icon")', () => {
		const wrapper = mount(LismIcon)
		expect(wrapper.classes()).toContain('a--icon')
		expect(wrapper.element.tagName.toLowerCase()).toBe('svg')
	})

	it('should render aria-hidden="true" when label is not provided', () => {
		const wrapper = mount(LismIcon)
		expect(wrapper.attributes('aria-hidden')).toBe('true')
	})

	it('should render aria-label and role="img" when label is provided', () => {
		const wrapper = mount(LismIcon, {
			props: { label: 'Home Icon' },
		})
		expect(wrapper.attributes('aria-label')).toBe('Home Icon')
		expect(wrapper.attributes('role')).toBe('img')
		expect(wrapper.attributes('aria-hidden')).toBeUndefined()
	})

	it('should render preset icon path and viewBox', () => {
		const wrapper = mount(LismIcon, {
			props: { icon: 'menu' },
		})
		// presets.js の menu は viewBox="0 0 256 256"
		expect(wrapper.attributes('viewBox')).toBe('0 0 256 256')
		expect(wrapper.find('path').exists()).toBe(true)
	})

	it('should render as img when src is provided', () => {
		const wrapper = mount(LismIcon, {
			props: { src: 'icon.png', alt: 'icon' },
		})
		expect(wrapper.element.tagName.toLowerCase()).toBe('img')
		expect(wrapper.attributes('src')).toBe('icon.png')
		// alt は attrs としてそのまま渡るはず
		expect(wrapper.attributes('alt')).toBe('icon')
	})

	it('should map size prop to fz class', () => {
		const wrapper = mount(LismIcon, {
			props: { size: '2xl' },
		})
		expect(wrapper.classes()).toContain('-fz:2xl')
	})

	it('should render custom SVG content via slot', () => {
		const wrapper = mount(LismIcon, {
			props: { viewBox: '0 0 100 100' },
			slots: {
				default: '<circle cx="50" cy="50" r="40" />',
			},
		})
		expect(wrapper.attributes('viewBox')).toBe('0 0 100 100')
		expect(wrapper.find('circle').exists()).toBe(true)
	})
})
