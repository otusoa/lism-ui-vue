import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { LismAutoColumns } from './index'

describe('LismAutoColumns component', () => {
  it('should render with the l--autoColumns class', () => {
    const wrapper = mount(LismAutoColumns)

    expect(wrapper.classes()).toContain('l--autoColumns')
  })

  it('should switch to auto-fit when autoFit is enabled', () => {
    const wrapper = mount(LismAutoColumns, {
      props: { autoFit: true },
    })

    expect(wrapper.attributes('style')).toContain('--autoMode: auto-fit')
  })
})
