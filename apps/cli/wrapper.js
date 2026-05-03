#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import updateNotifier from 'update-notifier'
import {
  createCliEnv,
  getBinaryFileName,
  getOptionalDependencyPackageName,
} from './wrapper-utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf-8'))
const require = createRequire(import.meta.url)

// バックグラウンドでアップデートを確認し、利用可能な場合はプロセスの最後に通知を表示する
export function setupUpdateNotifier(pkg) {
  const notifier = updateNotifier({ pkg })
  notifier.notify({
    isGlobal: true, // グローバルインストール向けの表示にする場合
    defer: true, // プロセス終了時に通知を出す（デフォルト）
  })
  return notifier
}

export function run() {
  setupUpdateNotifier(pkg)

  const pkgName = getOptionalDependencyPackageName()

  let binPath
  let resolveError = null
  try {
    // 開発環境用のローカルバイナリ確認（`go build`で直接作られた場合など）
    const localBinPath = path.resolve(__dirname, getBinaryFileName())

    // optionalDependencies としてインストールされたパッケージの package.json を探す
    try {
      const pkgJsonPath = require.resolve(`${pkgName}/package.json`)
      const pkgDir = path.dirname(pkgJsonPath)
      binPath = path.join(pkgDir, getBinaryFileName())
    } catch (err) {
      resolveError = err
      // インストールされていない場合はローカルをフォールバックとして試す
      binPath = localBinPath
    }
  } catch (err) {
    console.error(`Error: Unsupported platform/architecture: ${process.platform}-${process.arch}`)
    console.error(`Make sure the optional dependency '${pkgName}' was installed successfully.`)
    console.error(err)
    process.exit(1)
  }

  // 実行時のコマンド名を取得（npx経由かグローバルインストール経由かを判別するため）
  const invokedAs = path.basename(process.argv[1] || '', '.js')
  const env = createCliEnv(process.env, invokedAs)

  const { status, error } = spawnSync(binPath, process.argv.slice(2), {
    stdio: 'inherit',
    env,
  })

  if (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: Binary not found at ${binPath}`)
      if (resolveError) {
        console.error(`\nFailed to resolve optional dependency '${pkgName}':`)
        console.error(resolveError.message)
      }
      console.error(
        `\nThis might mean the optional dependency was not installed or the local build is missing.`,
      )
    } else {
      console.error(error.message)
    }
    process.exit(1)
  }

  process.exit(status ?? 1)
}

// 直接実行された場合のみ run() を呼び出す
if (
  process.argv[1] &&
  (path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url)) ||
    path.basename(process.argv[1], '.js') === 'wrapper' ||
    path.basename(process.argv[1], '.js') === 'cli')
) {
  run()
}
