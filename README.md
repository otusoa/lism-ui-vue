# LismUI Vue

LismCSS の Vue 3 専用の実装ライブラリです。効率的にレイアウトを構築するためのユーティリティコンポーネントを提供します。

## パッケージ構成

このリポジトリはモノレポ構成となっており、以下のパッケージが含まれています：

- **`lism-ui-vue`**: Vue 3 用のコアコンポーネントライブラリ。
- **`@lism-ui-vue/nuxt`**: Nuxt 4+ 対応の専用モジュール（自動インポート対応）。

---

## インストール

### Vue 3 プロジェクトの場合

```bash
npm install lism-ui-vue
```

### Nuxt プロジェクトの場合

```bash
npm install @lism-ui-vue/nuxt
```

※ `@lism-ui-vue/nuxt` をインストールすると、`lism-ui-vue` も自動的に依存関係として追加されます。

---

## Nuxt での利用方法

`nuxt.config.ts` の `modules` に追加するだけで、すべてのコンポーネントとコンポーザブルが自動的にインポートされます。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@lism-ui-vue/nuxt'],
})
```

### 利用例

```vue
<script setup lang="ts"></script>

<template>
  <Lism p="20" bgc="base" bd> Hello LismUI! </Lism>
</template>
```

---

## 開発者向け (Contribution)

### プロジェクトのセットアップ

```bash
pnpm install
```

### 開発サーバーの起動

```bash
# Vue本体の開発
pnpm dev

# Nuxtモジュールの開発 (Playground)
cd apps/lism-ui-vue-nuxt
pnpm dev
```

### ビルドとテスト

```bash
# 全パッケージのビルド
pnpm build

# 全パッケージのテスト
pnpm test
```

---

## License

MIT
