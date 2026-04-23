import { describe, it, expect } from 'vitest'
import { getContent } from './dummy-adapter'

describe('getContent (DummyAdapter)', () => {
  it('should return default dummy text (en, length m, as p)', () => {
    const result = getContent({})
    // デフォルトの英語(en)かつ長さ m のテキストが含まれているか
    expect(result).toContain('Lorem ipsum')
    expect(result).toContain('Labore et dolore magna aliqua')
  })

  it('should support Japanese (ja)', () => {
    const result = getContent({ lang: 'ja', length: 'xs' })
    expect(result).toBe('ロレム・イプサムの座り雨。')
  })

  it('should support Arabic (ar)', () => {
    const result = getContent({ lang: 'ar', length: 's' })
    expect(result).toContain('هذا نص وهمي')
  })

  it('should handle lengths correctly', () => {
    const xs = getContent({ length: 'xs' })
    const xl = getContent({ length: 'xl' })
    expect(xl.length).toBeGreaterThan(xs.length)
  })

  it('should render as a list when as is "ul" or "ol"', () => {
    const result = getContent({ as: 'ul', length: 's' })
    // s の長さは2文あるので <li> が2つ以上生成されるはず
    expect(result).toMatch(/^<li>.*<\/li><li>.*<\/li>$/)
    expect(result).toContain('<li>Lorem ipsum')
  })

  it('should apply "pre" prefix and escape it', () => {
    const result = getContent({ pre: 'NOTE: ', length: 'xs' })
    expect(result).toBe('NOTE: Lorem ipsum dolor sit amet.')

    // HTMLエスケープの確認
    const escapedResult = getContent({ pre: '<b>', length: 'xs' })
    expect(escapedResult).toContain('&lt;b&gt;Lorem ipsum')
  })

  it('should handle offset correctly', () => {
    const base = getContent({ lang: 'en', length: 's' })
    // s = 文1 + 文2
    // offset 1 なら文2から始まる
    const offsetResult = getContent({ lang: 'en', length: 's', offset: 1 })

    expect(base).toContain(offsetResult)
    expect(offsetResult).not.toContain('Lorem ipsum dolor sit amet')
    // 先頭が大文字化されていることを確認
    expect(offsetResult[0]).toBe(offsetResult[0]?.toUpperCase())
  })

  it('should handle pre correctly with list as', () => {
    const result = getContent({ as: 'ul', pre: 'Prefix item', length: 'xs' })
    // <li>Prefix item</li> + 他のアイテム
    expect(result).toContain('<li>Prefix item</li><li>')
  })
})
