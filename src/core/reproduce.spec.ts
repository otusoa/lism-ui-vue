import { describe, it, expect } from 'vitest'
import { getLismPropsVue } from './lism-adapter'
import type { LismProps } from './types'

describe('Reproduction: layout and hover issues', () => {
  it('should handle grid layout correctly (primitiveClass issue)', () => {
    const props = { layout: 'grid' } as LismProps
    const result = getLismPropsVue(props)

    // Check if l--grid is in class and not in primitiveclass attribute
    expect(result.class).toContain('l--grid')
    expect(result.primitiveClass).toBeUndefined()
    expect(result.primitiveclass).toBeUndefined()
    
    // Check for nested arrays
    result.class.forEach(c => {
      expect(typeof c).toBe('string')
    })
  })

  it('should handle hover box-shadow correctly (missing dash issue)', () => {
    const props = { hov: { bxsh: '10' } } as LismProps
    const result = getLismPropsVue(props)

    // Current issue: outputs -hov:bxsh, but should be -hov:-bxsh
    expect(result.class).toContain('-hov:-bxsh')
    expect(result.style).toHaveProperty('--hov-bxsh')
  })
})
