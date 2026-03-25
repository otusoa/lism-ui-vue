# @lism-ui-vue/nuxt

[Lism UI Vue](https://github.com/otusoa/lism-ui-vue) を Nuxt で利用するための専用モジュールです。

## 特徴

- **コンポーネントの自動インポート**: すべてのレイアウト・UIコンポーネントが自動的に登録・利用可能になります。
- **CSS の自動適用**: `lism-css` および `lism-ui-vue` のスタイルがプロジェクトに自動導入されます。
- **堅牢なリソース解決**: モジュール解決時のエラーを最小化し、モノレポや特定ビルド環境下でも安定して動作します。
- **Nuxt 4 / 3 対応**: 最新の Nuxt 環境に最適化されています。

## クイックスタート

### 1. インストール

```bash
npm install @lism-ui-vue/nuxt
```

### 2. モジュールの登録

`nuxt.config.ts` の `modules` に追加します。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@lism-ui-vue/nuxt'],
})
```

それだけです！レイアウトコンポーネント（`<LismBox>`, `<LismFlex>` 等）がプロジェクト内で直接利用可能になります ✨

---

## 注意点

**コンポーザブル（`useLismProps`等）はオートインポートの対象外です。**
意図しない名前の衝突を避けるため、独立したサブパスから明示的にインポートして利用してください。

```ts
import { useTest } from 'lism-ui-vue/composables'

const { message } = useTest()
```

---

## 詳細ドキュメント

より詳細な技術仕様やロードマップについては、以下の Wiki を参照してください。

- [Lism UI Vue Wiki (Outline)](https://outline-wiki.pitamai.com/s/43ec0697-df61-406c-b38a-4fdd92a4108d/doc/nuxt-WkvQfPeTOR)

---

## 開発者向け (Contribution)

<details>
  <summary>Local development</summary>

```bash
# 依存関係のインストール (ルートディレクトリで行ってください)
pnpm install

# Playgroundの準備
pnpm run dev:prepare

# Playgroundの起動
pnpm run dev

# テストの実行
pnpm run test
```

</details>

---

## License

MIT
