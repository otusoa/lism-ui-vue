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

    // CSSの追加
    nuxt.options.css = nuxt.options.css || []
    nuxt.options.css.push('lism-ui-vue/style')
    nuxt.options.css.push('lism-css/main.css')

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
      
      if (nuxt.options.dev) {
        // 開発環境では src/components を優先
        lookupDirs.push(packageSrcComponents, packageDistComponents)
      } else {
        // 本番環境では dist/runtime/components を優先
        lookupDirs.push(packageDistComponents, packageSrcComponents)
      }
    } catch (e) {
      console.warn('[lism-ui-vue/nuxt] Failed to resolve lism-ui-vue package structure. Component auto-import may fail.', e)
    }

    const matchedComponentsDir = lookupDirs.find((dir) => existsSync(dir))
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
