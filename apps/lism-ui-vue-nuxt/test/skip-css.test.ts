import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils/e2e'

describe('skipCss オプションの検証', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/imports', import.meta.url)),
    nuxtConfig: {
      lism: {
        skipCss: true,
      },
    },
  })
  const context = useTestContext()

  it('skipCss が true の時に CSS が追加されないことを確認する', () => {
    expect(context.nuxt).toBeDefined()
    const css = context.nuxt!.options.css ?? []

    // skipCss: true なので、どちらの CSS も含まれていないはずです
    expect(css).not.toContain('lism-ui-vue/style')
    expect(css).not.toContain('lism-css/main.css')
  })
})
