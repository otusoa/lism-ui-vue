import { defineNuxtModule, addComponentsDir, createResolver } from '@nuxt/kit'
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

    // TODO: SkipCssという名前は適当に決めたが、分かりづらそうなのでbeta版で「autoImportCss」に変更する予定
    const options = _options as { componentsDir?: string; skipCss?: boolean; verbose?: boolean }
    const skipCss = options.skipCss || false
    const verbose = options.verbose || false

    // lism-css を SSR バンドルに含める（getLayoutProps が SSR で解決できない問題の修正）
    nuxt.options.build = nuxt.options.build || {}
    nuxt.options.build.transpile = nuxt.options.build.transpile || []
    const transpile = nuxt.options.build.transpile as string[]
    if (!transpile.includes('lism-css')) transpile.push('lism-css')
    if (!transpile.includes('lism-ui-vue')) transpile.push('lism-ui-vue')

    // モジュール内 runtime/components の auto-import
    const runtimeComponentsDir = resolve('./runtime/components')
    if (existsSync(runtimeComponentsDir)) {
      addComponentsDir({
        path: runtimeComponentsDir,
        prefix: '',
        global: true,
      })
    }

    const isLocal = import.meta.url.includes('/apps/lism-ui-vue-nuxt/')
    const isTest = !!(process.env.VITEST || process.env.NODE_ENV === 'test')
    const useSrc = isLocal && (nuxt.options.dev || isTest)

    const lookupDirs: string[] = []

    // モジュールオプションで指定がある場合は最優先
    if (options.componentsDir) {
      lookupDirs.push(resolvePath(dirname(fileURLToPath(import.meta.url)), options.componentsDir))
    }

    // lism-ui-vue パッケージのディレクトリを解決
    const { resolvePath: resolveNuxtPath } = await import('@nuxt/kit')

    // CSSの追加
    if (!skipCss) {
      nuxt.options.css = nuxt.options.css || []
      for (const cssPath of ['lism-ui-vue/style', 'lism-css/main.css']) {
        try {
          const resolved = await resolveNuxtPath(cssPath)
          if (existsSync(resolved)) {
            nuxt.options.css.push(cssPath)
          }
        } catch {
          console.error(`[@lism-ui-vue/nuxt] Failed to resolve ${cssPath}`)
        }
      }
    }

    try {
      // エントリポイントからルートパスを推測する
      const lismEntryPath = await resolveNuxtPath('lism-ui-vue')
      const lismPackageRoot = resolvePath(dirname(lismEntryPath), '..')

      const packageSrcComponents = resolvePath(lismPackageRoot, 'src/components')
      const packageDistComponents = resolvePath(lismPackageRoot, 'dist/runtime/components')

      if (useSrc) {
        // モノレポ内での開発・テスト環境では src/components を優先
        lookupDirs.push(packageSrcComponents, packageDistComponents)
      } else {
        // パブリッシュ環境（または外部利用）では dist/runtime/components を優先
        lookupDirs.push(packageDistComponents)
      }
    } catch {
      // resolveNuxtPath が失敗した場合
      const moduleDir = dirname(fileURLToPath(import.meta.url))

      if (isLocal) {
        // モノレポ内ならプロジェクトルートから推測
        const projectRoot = resolvePath(moduleDir, '..', '..', '..')
        lookupDirs.push(resolvePath(projectRoot, 'src/components'))
      } else {
        // 外部利用なら自身の runtime/components を推測
        lookupDirs.push(resolvePath(moduleDir, 'runtime/components'))
      }
    }

    const matchedComponentsDir = lookupDirs.find((dir) => existsSync(dir))
    if (verbose) {
      console.log('[@lism-ui-vue/nuxt] isLocal:', isLocal)
      console.log('[@lism-ui-vue/nuxt] useSrc:', useSrc)
      console.log('[@lism-ui-vue/nuxt] Resolved lookupDirs:', lookupDirs)
      console.log('[@lism-ui-vue/nuxt] matchedComponentsDir:', matchedComponentsDir)
    }

    if (matchedComponentsDir) {
      addComponentsDir({
        path: matchedComponentsDir,
        prefix: '',
        global: true,
        extensions: ['vue'],
      })
    }
  },
})

export default module
