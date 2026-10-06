import { describe, it, expect } from 'vitest'
import { getLismPropsVue } from './lism-adapter'
import getLismProps from 'lism-css/lib/getLismProps'
import type { LismCoreBaseProps, LismProps } from './types'

describe('getLismPropsVue vs getLismProps (React)', () => {
  it('normalizes Vue class bindings while preserving generated class order', () => {
    const result = getLismPropsVue({
      class: ['base', { active: true, disabled: false }, ['nested', null, false]],
      className: ['alias', [{ extra: true }]],
      primitiveClass: ['primitive', [{ 'nested-primitive': true }]],
      layout: 'stack',
      set: 'hov',
      isContainer: true,
      util: 'trim',
      p: '20',
    })
    expect(result.class).toEqual([
      'base',
      'active',
      'nested',
      'alias',
      'extra',
      'primitive',
      'nested-primitive',
      'l--stack',
      'set--hov',
      'is--container',
      'u--trim',
      '-p:20',
    ])
  })

  it('normalizes a primitive class string before layout adds its own class', () => {
    expect(getLismPropsVue({ primitiveClass: 'first second', layout: 'stack' }).class).toEqual([
      'first',
      'second',
      'l--stack',
    ])
  })

  it.each([undefined, null, false, '', [null, false, ['', {}]]])(
    'ignores empty class and style bindings: %j',
    (value) => {
      expect(
        getLismPropsVue({ class: value, className: value, primitiveClass: value, style: value }),
      ).toEqual({ class: [], style: {} })
    },
  )

  it('parses CSS strings, including custom properties and semicolons inside URLs', () => {
    expect(
      getLismPropsVue({
        style: 'color: red; --custom: value; background-image: url("data:image/svg+xml;test");',
      }).style,
    ).toEqual({
      color: 'red',
      '--custom': 'value',
      'background-image': 'url("data:image/svg+xml;test")',
    })
  })

  it('merges nested style arrays in order and preserves numeric zero', () => {
    const result = getLismPropsVue({
      style: [
        'color: red; --custom: first',
        [false, { color: 'blue', opacity: 0 }, [null, { '--custom': 'last' }]],
      ],
    })
    expect(result.style).toEqual({ color: 'blue', opacity: 0, '--custom': 'last' })
  })

  it.each([
    { layout: 'withSide', sideW: '20rem', variable: '--sideW', expected: '20rem' },
    { layout: 'autoColumns', autoFit: true, variable: '--autoMode', expected: 'auto-fit' },
    { layout: 'switchColumns', breakSize: '24rem', variable: '--breakSize', expected: '24rem' },
  ] as const)(
    'preserves styles and layout overrides for $layout',
    ({ variable, expected, ...props }) => {
      const result = getLismPropsVue({
        ...props,
        style: ['color: red', { opacity: 0, [variable]: 'old' }],
      })
      expect(result.style).toEqual({ color: 'red', opacity: 0, [variable]: expected })
    },
  )

  it('preserves Lism prop overrides and does not mutate input bindings', () => {
    const classes = Object.freeze(['base', Object.freeze({ active: true })])
    const styles = Object.freeze([
      Object.freeze({ '--p': 'old', '--transitionProps': 'opacity', color: 'red' }),
    ])
    const input = Object.freeze({
      class: classes,
      style: styles,
      p: '12px',
      hasTransition: 'color',
    })
    const result = getLismPropsVue(input)
    expect(result.style).toEqual({ '--p': '12px', '--transitionProps': 'color', color: 'red' })
    expect(input.class).toBe(classes)
    expect(input.style).toBe(styles)
    expect(styles[0]).toEqual({ '--p': 'old', '--transitionProps': 'opacity', color: 'red' })
  })

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
    expect(result.class).toContain('-hov:-scale')

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
    const props = { set: 'hov plain -plain' } as const
    const result = getLismPropsVue(props as unknown as LismProps)

    expect(result.class).toContain('set--hov')
    expect(result.class).not.toContain('set--plain')
    expect(result.class).not.toContain('set---plain')
    // 原則として attrs には残らない
    expect(result.set).toBeUndefined()
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

  it.each([
    { isWrapper: 'l' },
    { isWrapper: 'l', contentSize: 's' },
    { isWrapper: '20rem' },
    { hasTransition: ' color, opacity ' },
    { hasTransition: false },
    {
      hov: {
        c: 'brand',
        transform: 'scale(1.1)',
        underline: true,
        o: 0,
        custom: '-',
        ignored: false,
      },
    },
    { hov: '-c,-bxsh,in:zoom' },
    { set: 'plain hov plain -plain', util: 'trim cbox trim -trim' },
    { set: ['plain', 'hov', '-plain'], util: ['trim', 'cbox', '-trim'] },
    { set: '-plain', util: '-trim' },
    { p: ':' },
    { p: { base: ':', md: ':custom' } },
  ])('matches the v1.0.1 distribution for %j', (props) => {
    const reference = getLismProps(props as LismCoreBaseProps)
    const actual = getLismPropsVue(props as LismProps)
    expect(actual.class.join(' ')).toBe(reference.className ?? '')
    expect(actual.style).toEqual(reference.style ?? {})
  })

  it('supports Vue template flag traits and modern border directions', () => {
    const result = getLismPropsVue({
      'is-wrapper': '',
      'has-transition': '',
      'bd-s': '',
      'bd-bs': '',
      'bd-e': '',
      'bd-be': '',
    })
    expect(result.class).toEqual(
      expect.arrayContaining([
        'is--wrapper',
        'has--transition',
        '-bd-s',
        '-bd-bs',
        '-bd-e',
        '-bd-be',
      ]),
    )
    expect(result.style).toEqual({})
  })

  it('keeps inline transition variables unless an explicit hasTransition string overrides them', () => {
    expect(
      getLismPropsVue({ hasTransition: true, style: { '--transitionProps': 'opacity' } }).style,
    ).toEqual({ '--transitionProps': 'opacity' })
    expect(
      getLismPropsVue({ hasTransition: 'color', style: { '--transitionProps': 'opacity' } }).style,
    ).toEqual({ '--transitionProps': 'color' })
  })
})
