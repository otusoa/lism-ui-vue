# Lism UI Vue

[LismCSS](https://lism-css.com/) の Vue 3 専用実装ライブラリです。コンポーネントを提供します。

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

### SVG文字列のアイコン

`LismIcon`の`icon`に渡したSVG文字列は、ブラウザー・SSRの両方でDOMPurifyによってサニタイズします。SVGルートの属性も対象です。スクリプト、イベント属性、危険なURL、`foreignObject`、`style`タグなどは除去されるため、それらに依存するSVGは表示が変わる場合があります。

通常の図形・グラデーション・マスク・フィルター・内部参照を保持する設定を使用します。`use`の参照先は`#id`形式に限定し、外部SVGへの参照は除去します。SVG文字列以外のVueコンポーネント、slot、直接指定したprops・`exProps`はサニタイズの対象外で、開発者が管理するコードとして扱います。

SSR用DOMを提供する`isomorphic-dompurify`を使用します。Node.jsの対応範囲は本パッケージの`engines`に従います。

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
