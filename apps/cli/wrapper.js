#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import updateNotifier from 'update-notifier'
import pkg from './package.json' with { type: 'json' }
import {
  createCliEnv,
  getBinaryFileName,
  getOptionalDependencyPackageName,
} from './wrapper-utils.js'

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
  try {
    // 開発環境用のローカルバイナリ確認（`go build`で直接作られた場合など）
    const localBinPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      getBinaryFileName(),
    )

    // optionalDependencies としてインストールされたパッケージの package.json を探す
    try {
      const pkgJsonUrl = import.meta.resolve(`${pkgName}/package.json`)
      const pkgDir = path.dirname(fileURLToPath(pkgJsonUrl))
      binPath = path.join(pkgDir, getBinaryFileName())
    } catch {
      // インストールされていない場合はローカルをフォールバックとして試す
      binPath = localBinPath
    }
  } catch {
    console.error(`Error: Unsupported platform/architecture: ${process.platform}-${process.arch}`)
    console.error(`Make sure the optional dependency '${pkgName}' was installed successfully.`)
    process.exit(1)
  }

  // 実行時のコマンド名を取得（npx経由かグローバルインストール経由かを判別するため）
  const invokedAs = path.basename(process.argv[1], '.js')
  const env = createCliEnv(process.env, invokedAs)

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
}

// 直接実行された場合のみ run() を呼び出す
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  run()
}
