import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('Layout Components SSR', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/layouts', import.meta.url)),
  })

  it('renders LismBox with correct classes', async () => {
    try {
      const html = await $fetch('/')
      expect(html).toContain('l--box')
      expect(html).toContain('-p:20')
      expect(html).toContain('-bgc:base-2')
    } catch (e: any) {
      console.error('FETCH ERROR:', e.data || e.message)
      throw e
    }
  })

  it('renders LismFlex with correct classes', async () => {
    const html = await $fetch('/')
    expect(html).toContain('l--flex')
    expect(html).toContain('-g:10')
    expect(html).toContain('-ai:c')
  })

  it('renders LismStack with correct classes', async () => {
    const html = await $fetch('/')
    expect(html).toContain('l--stack')
    expect(html).toContain('-g:20')
  })

  it('renders LismGrid with correct classes', async () => {
    const html = await $fetch('/')
    expect(html).toContain('l--grid')
    expect(html).toContain('-gtc:2')
    expect(html).toContain('-g:15')
  })

  it('renders LismContainer with correct classes', async () => {
    const html = await $fetch('/')
    expect(html).toContain('is--container')
    // size prop は lism-css が CSS 変数か属性として出力する
    expect(html).toContain('id="test-container"')
  })

  it('renders LismCluster with correct classes', async () => {
    const html = await $fetch('/')
    expect(html).toContain('l--cluster')
    expect(html).toContain('-g:5')
  })

  it('renders LismFrame with aspect-ratio style', async () => {
    const html = await $fetch('/')
    expect(html).toContain('l--frame')
    expect(html).toContain('-ar:16/9')
  })

  it('renders LismSideMain with css variables', async () => {
    const html = await $fetch('/')
    expect(html).toContain('l--sideMain')
    expect(html).toContain('-g:20')
  })

  it('renders LismLayer with backdrop-filter', async () => {
    const html = await $fetch('/')
    expect(html).toContain('is--layer')
    expect(html).toContain('backdrop-filter:blur(5px)')
  })
})
