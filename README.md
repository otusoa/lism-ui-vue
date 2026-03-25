# Lism UI Vue

[LismCSS](https://lism-css.com/) の Vue 3 専用実装ライブラリです。効率的にレイアウトを構築するためのユーティリティコンポーネントを提供します。

## パッケージ構成

このリポジトリはモノレポ構成となっており、以下のパッケージが含まれています：

- **`lism-ui-vue`**: Vue 3 用のコアコンポーネントライブラリ。
- **`@lism-ui-vue/nuxt`**: Nuxt 4+ / 3 対応の専用モジュール。

---

## インストール

### Vue 3 プロジェクト

```bash
npm install lism-ui-vue
```

### Nuxt プロジェクト

```bash
npm install @lism-ui-vue/nuxt
```

---

## 使いかた

### Nuxt での利用

`nuxt.config.ts` の `modules` に追加すると、すべてのコンポーネントが自動的にインポートされます。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@lism-ui-vue/nuxt'],
})
```

#### コンポーネントの利用例

レイアウトコンポーネント（`LismBox`, `LismFlex`, `LismStack` 等）が自動的に利用可能です。
(詳細はドキュメントを確認ください。)

また、型サジェストが効きます。

```vue
<template>
  <LismBox p="30" bgc="base-2" bd bdrs="10">
    <Lism fz="5xl" fw="bold">Hello Lism UI Vue!</Lism>
    <LismStack g="20" mt="20">
      <Lism p="10" bgc="brand">Item 1</Lism>
      <Lism p="10" bgc="accent">Item 2</Lism>
    </LismStack>
  </LismBox>
</template>
```

### コンポーザブルの利用

**コンポーザブル（`useLismProps`等）はオートインポートの対象外です。** 意図しない名前の衝突を避けるため、独立したサブパスから明示的にインポートして利用してください。

```ts
import { useTest } from 'lism-ui-vue/composables'

const { message } = useTest()
```

---

## 詳細ドキュメント

より詳細な技術仕様やロードマップについては、以下の Wiki を参照してください。

- [Lism UI Vue Wiki (Outline)](https://outline-wiki.pitamai.com/s/43ec0697-df61-406c-b38a-4fdd92a4108d)

---

## 開発者向け (Contribution)

### プロジェクトのセットアップ

```bash
pnpm install
```

### 開発サーバーの起動

```bash
# Vue本体の開発・ビルド確認
pnpm dev

# Nuxtモジュールの開発 (Playground)
cd apps/lism-ui-vue-nuxt
pnpm dev
```

### ビルド

```bash
pnpm build
```

---

## License

MIT
