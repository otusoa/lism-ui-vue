import { describe, it, expect } from 'vitest'
import { getLismPropsVue } from '../../../src/core/lism-adapter'

describe('getLismPropsVue', () => {
  it('converts basic props to classes', () => {
    const output = getLismPropsVue({ p: '20', bgc: 'base' })
    expect(output.class).toContain('-p:20')
    expect(output.class).toContain('-bgc:base')
  })

  it('handles kebab-case props automatically', () => {
    // is-container should become isContainer and map to is--container
    const output = getLismPropsVue({ 'is-container': true })
    expect(output.class).toContain('is--container')
  })

  it('converts filter props to backdrop-filter', () => {
    const output = getLismPropsVue({ blur: '10px', brightness: '0.5' })
    expect(output.style.backdropFilter).toBe('blur(10px) brightness(0.5)')
  })

  it('handles SideMain specific props correctly', () => {
    // WithSide layout logic (mocked by lism-css/lib/getLayoutProps)
    const output = getLismPropsVue({ layout: 'withSide', sideW: '200px' })
    expect(output.class).toContain('l--withSide')
    expect(output.style['--sideW']).toBe('200px')
  })

  it('automatically converts kebab-case layout props to camelCase', () => {
    // side-w should be converted to sideW and then to --sideW by lism-css
    const output = getLismPropsVue({ layout: 'withSide', 'side-w': '300px' })
    expect(output.style['--sideW']).toBe('300px')
  })

  it('merges class and set correctly', () => {
    const output = getLismPropsVue({ className: 'c--test', set: 'test' })
    expect(output.class).toContain('c--test')
    expect(output.class).toContain('set--test')
  })
})
