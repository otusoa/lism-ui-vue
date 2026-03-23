import { defineNuxtModule, addComponentsDir, addImportsDir, createResolver } from '@nuxt/kit'
import { existsSync } from 'node:fs'
import { dirname, resolve as resolvePath } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { NuxtModule } from '@nuxt/schema'

const module: NuxtModule = defineNuxtModule({
  meta: {
    name: 'lism-ui-vue/nuxt',
    configKey: 'lism',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },
  setup(_options, nuxt) {
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

    const moduleDir = dirname(fileURLToPath(import.meta.url))
    const workspaceSrcComponents = resolvePath(moduleDir, '../../../src/components')
    const packageRoot = resolvePath(moduleDir, '../../..')
    const packageSrcComponents = resolvePath(packageRoot, 'src/components')
    const packageDistComponents = resolvePath(packageRoot, 'dist/components')

    const lookupDirs = [] as string[]

    if (optionComponentsDir) {
      lookupDirs.push(resolvePath(moduleDir, optionComponentsDir))
    }

    if (nuxt.options.dev) {
      lookupDirs.push(workspaceSrcComponents, packageSrcComponents, packageDistComponents)
    }
    else {
      lookupDirs.push(packageDistComponents, packageSrcComponents, workspaceSrcComponents)
    }

    const matchedComponentsDir = lookupDirs.find(dir => existsSync(dir))
    if (matchedComponentsDir) {
      addComponentsDir({
        path: matchedComponentsDir,
        prefix: '',
        global: true,
      })
    }

    // composables を自動インポート対象として登録（手動で名前列挙しない）
    const composablesDir = resolve('./runtime/composables')
    addImportsDir(composablesDir)
  },
})

export default module
