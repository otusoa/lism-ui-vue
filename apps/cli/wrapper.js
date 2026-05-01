#!/usr/bin/env node
import os from 'node:os'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)

const platform = os.platform()
const architecture = os.arch()
const pkgName = `@lism-ui-vue/cli-${platform}-${architecture}`

let binPath
try {
  // 開発環境用のローカルバイナリ確認（`go build`で直接作られた場合など）
  const localBinPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    platform === 'win32' ? 'lism-ui-vue.exe' : 'lism-ui-vue',
  )

  // optionalDependencies としてインストールされたパッケージの package.json を探す
  try {
    const pkgJsonPath = require.resolve(`${pkgName}/package.json`)
    const pkgDir = path.dirname(pkgJsonPath)
    const exeName = platform === 'win32' ? 'lism-ui-vue.exe' : 'lism-ui-vue'
    binPath = path.join(pkgDir, exeName)
  } catch {
    // インストールされていない場合はローカルをフォールバックとして試す
    binPath = localBinPath
  }
} catch {
  console.error(`Error: Unsupported platform/architecture: ${platform}-${architecture}`)
  console.error(`Make sure the optional dependency '${pkgName}' was installed successfully.`)
  process.exit(1)
}

// 引数をそのままGoバイナリに渡し、標準入出力をターミナルに繋ぐ
const env = { ...process.env }
// npx や bunx / pnpm dlx 経由の場合は、表示名を npx @scope/pkg の形式にする
env.LISM_VUE_CLI_NAME = `npx ${process.env.npm_package_name ?? '@lism-ui-vue/cli'}`

const { status, error } = spawnSync(binPath, process.argv.slice(2), {
  stdio: 'inherit',
  env,
})

if (error) {
  if (error.code === 'ENOENT') {
    console.error(`Error: Binary not found at ${binPath}`)
    console.error(
      `This might mean the optional dependency was not installed or the local build is missing.`,
    )
  } else {
    console.error(error.message)
  }
  process.exit(1)
}

process.exit(status ?? 1)
