import { describe, it, expect } from 'vitest'
import { getLismPropsVue } from './lism-adapter'
import getLismProps from 'lism-css/lib/getLismProps'
import type { LismCoreProps, LismProps } from './types'

describe('getLismPropsVue vs getLismProps (React)', () => {
  it('React reference test for cols array', () => {
    const props = { cols: [1, 2, 3] as const }
    const result = getLismProps(props as LismCoreProps)

    // React implementation behavior check
    // console.log('React output:', JSON.stringify(result, null, 2))

    // Test base expectations from React version
    expect(result).toBeDefined()
  })

  it('Vue implementation should handle responsive arrays correctly', () => {
    const props = { cols: [1, 2, 3] as const }
    const result = getLismPropsVue(props as LismProps)

    // cols は現在の実装ではクラスを出力せず、変数のみを出力する設定のようです
    expect(result.style).toHaveProperty('--cols', 1)

    // レスポンシブクラスと変数
    expect(result.class).toContain('-cols_sm')
    expect(result.style).toHaveProperty('--cols_sm', 2)
    expect(result.class).toContain('-cols_md')
    expect(result.style).toHaveProperty('--cols_md', 3)
  })

  it('should normalize kebab-case props to camelCase and handle layout props', () => {
    const props = { layout: 'sideMain', 'is-container': true, 'side-w': '20rem' } as const
    const result = getLismPropsVue(props as LismProps)

    expect(result.class).toContain('is--container')
    expect(result.class).toContain('l--sideMain')
    expect(result.style).toHaveProperty('--sideW', '20rem')
  })

  it('should handle flag attributes (empty string as true)', () => {
    // Vue templates pass `<Lism bd />` as `{ bd: "" }`
    const props = { bd: '', p: '20' } as const
    const result = getLismPropsVue(props as unknown as LismProps)

    expect(result.class).toContain('-bd')
    expect(result.class).toContain('-p:20')
  })

  it('should handle various design tokens correctly', () => {
    const props = {
      p: '20',
      m: 'auto',
      fz: 'xl',
      bgc: 'brand',
      c: 'text',
      bxsh: '20',
    } as const
    const result = getLismPropsVue(props as LismProps)

    expect(result.class).toContain('-p:20')
    expect(result.class).toContain('-m:auto')
    expect(result.class).toContain('-fz:xl')
    expect(result.class).toContain('-bgc:brand')
    expect(result.class).toContain('-c:text')
    expect(result.class).toContain('-bxsh:20')
  })

  it('should handle complex hov objects', () => {
    const props = {
      hov: {
        color: 'brand',
        bgc: 'base-2',
        scale: '1.1',
      },
    } as const
    const result = getLismPropsVue(props as LismProps)

    // オブジェクト形式の場合は個別のホバーユーティリティが出力される
    expect(result.class).toContain('-hov:color')
    expect(result.class).toContain('-hov:bgc')
    expect(result.class).toContain('-hov:scale')

    expect(result.style).toHaveProperty('--hov-color')
    expect(result.style).toHaveProperty('--hov-bgc')
    expect(result.style).toHaveProperty('--hov-scale', '1.1')
  })

  it('should pass through non-Lism attributes', () => {
    const props = {
      id: 'my-id',
      'aria-label': 'test-label',
      'data-test': 'data-value',
      title: 'some-title',
    }
    const result = getLismPropsVue(props as LismProps)

    expect(result.id).toBe('my-id')
    expect(result['aria-label']).toBe('test-label')
    expect(result['data-test']).toBe('data-value')
    expect(result.title).toBe('some-title')
  })
})
