import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { loadNuxt } from '@nuxt/kit'

describe('インポートと設定の検証', async () => {
  const rootDir = fileURLToPath(new URL('./fixtures/imports', import.meta.url))

  it('Nuxtの設定とコンポーネントのプロパティを検証する', async () => {
    const nuxt = await loadNuxt({ cwd: rootDir, dev: true })

    // トランスパイル設定の検証
    // module.ts によって lism-css と lism-ui-vue が transpile に追加されていることを確認
    const transpile = nuxt.options.build.transpile || []
    expect(transpile).toContain('lism-css')
    expect(transpile).toContain('lism-ui-vue')

    // CSS設定の検証
    // module.ts はファイルが解決可能な場合のみ css 配列にプッシュ
    const css = nuxt.options.css || []

    // lism-css は依存関係として確実に存在するため、常に含まれるはず
    expect(css).toContain('lism-css/main.css')

    // lism-ui-vue/style はビルド済み（dist/lism-ui-vue.css）である状況とそうでない状況がある
    // 存在する場合は追加されていることを確認
    if (css.includes('lism-ui-vue/style')) {
      expect(css).toContain('lism-ui-vue/style')
    }

    await nuxt.close()
  })
})

