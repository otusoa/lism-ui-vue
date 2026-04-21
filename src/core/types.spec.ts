import { describe, it, expectTypeOf } from 'vitest'
import type { LismBaseProps } from './types'

describe('LismBaseProps Type', () => {
  it('should not have variant property', () => {
    // @ts-expect-error - variant should have been removed
    const props: LismBaseProps = { variant: 'test' }
    expectTypeOf(props).not.toHaveProperty('variant')
  })

  it('should not have lismClass property', () => {
    // @ts-expect-error - lismClass should have been removed
    const props: LismBaseProps = { lismClass: 'test' }
    expectTypeOf(props).not.toHaveProperty('lismClass')
  })

  it('should still have common lism props', () => {
    const props: LismBaseProps = { p: '20', bgc: 'brand' }
    expectTypeOf(props).toHaveProperty('p')
    expectTypeOf(props).toHaveProperty('bgc')
  })
})
