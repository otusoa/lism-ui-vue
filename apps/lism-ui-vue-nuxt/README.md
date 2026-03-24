# @lism-ui-vue/nuxt

LismUI Vue を Nuxt で利用するための専用モジュールです。

- [LismUI Vue 本体のドキュメント](https://github.com/otusoa/lism-ui-vue)

## 特徴

- **自動インポート**: すべてのコンポーネントとコンポジットが自動的に登録されます。
- **CSSの自動適用**: `lism-css` と `lism-ui-vue` のスタイルが自動的に読み込まれます。
- **Nuxt 4+ 対応**: 最新の Nuxt 環境に最適化されています。

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

それだけです！プロジェクト内で LismUI のコンポーネント（`<Lism>` など）が直接利用可能になります ✨

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

## License

MIT
