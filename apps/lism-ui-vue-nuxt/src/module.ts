import { defineNuxtModule, addComponentsDir, addImportsDir, createResolver } from '@nuxt/kit'
import { existsSync } from 'node:fs'
import { dirname, resolve as resolvePath } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { NuxtModule } from '@nuxt/schema'

const module: NuxtModule = defineNuxtModule({
  meta: {
    name: '@lism-ui-vue/nuxt',
    configKey: 'lism',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const options = _options as { componentsDir?: string; skipCss?: boolean }

    // CSSの追加（skipCss: true の場合はスキップ）
    if (!options.skipCss) {
      nuxt.options.css = nuxt.options.css || []
      nuxt.options.css.push('lism-ui-vue/style')
      nuxt.options.css.push('lism-css/main.css')
    }

    // lism-css を SSR バンドルに含める（getLayoutProps が SSR で解決できない問題の修正）
    nuxt.options.build = nuxt.options.build || {}
    nuxt.options.build.transpile = nuxt.options.build.transpile || []
    const transpile = nuxt.options.build.transpile as string[]
    if (!transpile.includes('lism-css')) transpile.push('lism-css')
    if (!transpile.includes('lism-ui-vue')) transpile.push('lism-ui-vue')

    // モジュール内 runtime/components の auto-import
    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: '',
      global: true,
    })

    // モジュールオプションで指定がある場合は優先
    const { componentsDir: optionComponentsDir } = _options as { componentsDir?: string }

    const lookupDirs = [] as string[]

    if (optionComponentsDir) {
      lookupDirs.push(resolvePath(dirname(fileURLToPath(import.meta.url)), optionComponentsDir))
    }

    // lism-ui-vue パッケージのディレクトリを解決
    const { resolvePath: resolveNuxtPath } = await import('@nuxt/kit')
    
    try {
      // package.jsonが非公開の場合があるため、エントリポイントからルートパスを推測する
      const lismEntryPath = await resolveNuxtPath('lism-ui-vue')
      const lismPackageRoot = resolvePath(dirname(lismEntryPath), '..')
      
      const packageSrcComponents = resolvePath(lismPackageRoot, 'src/components')
      const packageDistComponents = resolvePath(lismPackageRoot, 'dist/runtime/components')
      
      const isTest = !!(process.env.VITEST || process.env.NODE_ENV === 'test')
      if (nuxt.options.dev || isTest) {
        // 開発・テスト環境では src/components を優先
        lookupDirs.push(packageSrcComponents, packageDistComponents)
      } else {
        // 本番環境では dist/runtime/components を優先
        lookupDirs.push(packageDistComponents, packageSrcComponents)
      }
    } catch (_e) {
      // resolveNuxtPath が失敗した場合（テスト環境 / pnpm link など）は
      // このファイル自身の位置 (apps/lism-ui-vue-nuxt/src/module.ts) から推測する
      const moduleDir = dirname(fileURLToPath(import.meta.url))
      // moduleDir = .../apps/lism-ui-vue-nuxt/src
      // 2段上がるとプロジェクトルート
      const projectRoot = resolvePath(moduleDir, '..', '..')
      const fallbackSrc = resolvePath(projectRoot, 'src/components')
      const fallbackDist = resolvePath(moduleDir, 'runtime/components')
      console.warn('[lism-ui-vue/nuxt] Falling back to local paths:', { fallbackSrc, fallbackDist })
      lookupDirs.push(fallbackSrc, fallbackDist)
    }

    const matchedComponentsDir = lookupDirs.find((dir) => existsSync(dir))
    console.log('[lism-ui-vue/nuxt] Resolved lookupDirs:', lookupDirs)
    console.log('[lism-ui-vue/nuxt] matchedComponentsDir:', matchedComponentsDir)

    if (matchedComponentsDir) {
      addComponentsDir({
        path: matchedComponentsDir,
        prefix: '',
        global: true,
        extensions: ['vue'],
      })
    }

    // composables の auto-import 登録
    const composablesDir = resolve('./runtime/composables')
    addImportsDir(composablesDir)
  },
})

export default module
