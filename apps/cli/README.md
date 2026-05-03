# @lism-ui-vue/cli

[LismUI-Vue](https://github.com/otusoa/lism-ui-vue) を便利に使うための CLI ツールです。  
プロジェクトの初期化、設定ファイルの生成、Nuxt プロジェクトのセットアップなどをサポートします。

## インストール・実行

```bash
# 初期設定 (設定ファイルの生成)
npx @lism-ui-vue/cli@latest init

# Nuxt プロジェクトの新規作成と自動セットアップ
npx @lism-ui-vue/cli@latest template nuxt [project-name]
```

グローバルにインストールして使用することも可能です。

```bash
npm install -g @lism-ui-vue/cli
lism-ui-vue init
```

## コマンド

### `init`

LismUI-Vue のプロジェクト設定ファイル `lism-ui-vue.config.yaml` を対話形式で生成します。

- 使用するパッケージマネージャーの指定
- コンポーネント等の出力先ディレクトリの指定
- テンプレートの選択 (開発中)

### `template nuxt`

Nuxt プロジェクトを新規作成し、以下のセットアップを自動的に行います。

1. `create` 公式のコマンドによるプロジェクト作成
2. `lism-ui-vue` および `@lism-ui-vue/nuxt` のインストール
3. `nuxt.config.ts` へのモジュール追加設定

### `check`

現在のプロジェクトに対して、LismUI-Vue のセットアップ状況を確認します。

```bash
npx @lism-ui-vue/cli@latest check
```

確認する項目は次のとおりです。

- `package.json` に `lism-ui-vue` がインストールされているか
- 設定ファイル `lism-ui-vue.config.yaml` が存在するか
- Nuxt プロジェクトの場合、`@lism-ui-vue/nuxt` がインストールされているか
- Nuxt プロジェクトの場合、`nuxt.config.ts` または `nuxt.config.js` に `@lism-ui-vue/nuxt` が追加されているか

不足している項目がある場合は、`init` や `install` / `add` の実行例もあわせて表示します。

## 設定ファイル (`lism-ui-vue.config.yaml`)

`init` コマンドで生成される設定ファイルです。

```yaml
packageManager: pnpm
outputDir: src/components
# template: basic
```

## ライセンス

MIT
