import { describe, it, expect } from 'vitest'
import { getLismPropsVue } from './lism-adapter'
import getLismProps from 'lism-css/lib/getLismProps'
import type { LismCoreBaseProps, LismProps } from './types'

describe('getLismPropsVue vs getLismProps (React)', () => {
  it('React reference test for cols array', () => {
    const props = { cols: [1, 2, 3] as const }
    const result = getLismProps(props as LismCoreBaseProps)

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
    const props = { layout: 'withSide', 'is-container': true, 'side-w': '20rem' } as const
    const result = getLismPropsVue(props as LismProps)

    expect(result.class).toContain('is--container')
    expect(result.class).toContain('l--withSide')
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
        c: 'brand',
        bgc: 'base-2',
        scale: '1.1',
      },
    } as const
    const result = getLismPropsVue(props as LismProps)

    // オブジェクト形式の場合は個別のホバーユーティリティが出力される
    expect(result.class).toContain('-hov:-c')
    expect(result.class).toContain('-hov:-bgc')
    expect(result.class).toContain('-hov:scale')

    expect(result.style).toHaveProperty('--hov-c')
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

  it('should handle set props correctly', () => {
    const props = { set: 'transition', unset: ['hov', 'plain'] } as const
    const result = getLismPropsVue(props as unknown as LismProps)

    expect(result.class).toContain('set--transition')
    expect(result.class).toContain('unset--hov')
    expect(result.class).toContain('unset--plain')
    // 原則として attrs には残らない
    expect(result.set).toBeUndefined()
    expect(result.unset).toBeUndefined()
  })

  it('should handle util props correctly', () => {
    const props = { util: 'cbox' } as const
    const result = getLismPropsVue(props as unknown as LismProps)

    expect(result.class).toContain('u--cbox')
    expect(result.util).toBeUndefined()

    const arrayProps = { util: ['cbox', 'fs-o'] } as const
    const arrayResult = getLismPropsVue(arrayProps as unknown as LismProps)
    expect(arrayResult.class).toContain('u--cbox')
    expect(arrayResult.class).toContain('u--fs-o')

    const stringProps = { util: 'cbox fs-o' } as const
    const stringResult = getLismPropsVue(stringProps as unknown as LismProps)
    expect(stringResult.class).toContain('u--cbox')
    expect(stringResult.class).toContain('u--fs-o')
  })

  it('should handle atomic props correctly', () => {
    const props = { atomic: 'divider' } as const
    const result = getLismPropsVue(props as unknown as LismProps)

    expect(result.class).toContain('a--divider')
    expect(result.atomic).toBeUndefined()

    const spacerProps = { atomic: 'spacer', w: '50' } as const
    const spacerResult = getLismPropsVue(spacerProps as unknown as LismProps)

    expect(spacerResult.class).toContain('a--spacer')
  })
})
