import { describe, it, expectTypeOf } from 'vitest'
import type { LismBaseProps } from './types'

type HasLismBaseProp<Key extends PropertyKey> = Key extends keyof LismBaseProps ? true : false

describe('LismBaseProps Type', () => {
  it('should not have the removed variant property', () => {
    expectTypeOf<HasLismBaseProp<'variant'>>().toEqualTypeOf<false>()
  })

  it('should not have the removed lismClass property', () => {
    expectTypeOf<HasLismBaseProp<'lismClass'>>().toEqualTypeOf<false>()
  })

  it('should still have common lism props', () => {
    expectTypeOf<HasLismBaseProp<'p'>>().toEqualTypeOf<true>()
    expectTypeOf<HasLismBaseProp<'bgc'>>().toEqualTypeOf<true>()
  })
})
