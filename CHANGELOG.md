# Changelog


## lism-ui-vue@v0.1.2-alpha.5

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/lism-ui-vue@v0.1.2-alpha.4...lism-ui-vue@v0.1.2-alpha.5)

## lism-ui-vue@v0.1.2-alpha.4

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/@lism-ui-vue/nuxt@v0.1.1-alpha.2...lism-ui-vue@v0.1.2-alpha.4)

### 🚀 Enhancements

- **LismFlow:** Flowを追加 ([d61a4c6](https://github.com/otusoa/lism-ui-vue/commit/d61a4c6))
- **LismFluidCols:** FluidClosを追加 ([b144108](https://github.com/otusoa/lism-ui-vue/commit/b144108))
- **Columns, SwitchCols:** コンポーネントを追加 ([5914a50](https://github.com/otusoa/lism-ui-vue/commit/5914a50))

### 🩹 Fixes

- **tsconfig:** Tsconfigのパスにrootを指定。その他改善 ([b1186ca](https://github.com/otusoa/lism-ui-vue/commit/b1186ca))
- **tsconfig:** ついでにTSconfigのエラーを修正 ([2a29c4c](https://github.com/otusoa/lism-ui-vue/commit/2a29c4c))

### 🏡 Chore

- **dev:** Package.jsonのリリース周りを改善 ([62283db](https://github.com/otusoa/lism-ui-vue/commit/62283db))
- **storyboook:** 環境を整備 ([7b4b94e](https://github.com/otusoa/lism-ui-vue/commit/7b4b94e))
- **comment:** 分かりやすようにコメントを追加 ([c2f7d29](https://github.com/otusoa/lism-ui-vue/commit/c2f7d29))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## v0.1.2-alpha.3

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/v0.1.1-alpha.1...v0.1.2-alpha.3)

### 🏡 Chore

- **tag名:** タグ名を設定ファイルで変更 ([6f8a551](https://github.com/otusoa/lism-ui-vue/commit/6f8a551))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## v0.1.2-alpha.2

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/v0.1.1-alpha.0...v0.1.2-alpha.2)

### 🏡 Chore

- **package.json:** リリース周りを更新 ci: alphaリリースに最適化 ([d3d5b1e](https://github.com/otusoa/lism-ui-vue/commit/d3d5b1e))

### 🤖 CI

- Ciのタグが競合する問題を解決 ([7eb7eb5](https://github.com/otusoa/lism-ui-vue/commit/7eb7eb5))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## v0.1.2-alpha.1

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/v0.1.2-alpha.0...v0.1.2-alpha.1)

### 🤖 CI

- **publish:** Ciファイルの不備を更新 ([8b13d17](https://github.com/otusoa/lism-ui-vue/commit/8b13d17))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## v0.1.2-alpha.0


### 🚀 Enhancements

- **Lismコンポーネント:** Lismコンポーネントを追加 ([13b30bf](https://github.com/otusoa/lism-ui-vue/commit/13b30bf))
- **Lismコンポーネント:** LismClassとvariantプロパティを追加し、Lismコンポーネントの使用を拡張 ([47adc35](https://github.com/otusoa/lism-ui-vue/commit/47adc35))
- Update pnpm workspace to include '@parcel/watcher' as a built dependency ([1681454](https://github.com/otusoa/lism-ui-vue/commit/1681454))
- **型推論、auto-import:** Auto-importを改善。型推論をできるようにした。 ([81b9b85](https://github.com/otusoa/lism-ui-vue/commit/81b9b85))
- **nuxt-modules:** 別々で公開できるようにした ([41c76c7](https://github.com/otusoa/lism-ui-vue/commit/41c76c7))
- Lismコアコンポーネントおよび基礎的なレイアウトコンポーネント（Box, Flex, Stack, Grid, Container）の追加 ([c4a1532](https://github.com/otusoa/lism-ui-vue/commit/c4a1532))
- レイアウトコンポーネントの拡充とアーキテクチャの最適化 - 新規コンポーネントの追加: LismCluster, LismFrame, LismSideMain, LismLayer  - 全レイアウトコンポーネントで公式準拠の `layout="xxx"` プロパティによる制御を採用  - 各コンポーネントの Props 型定義を強化し、JSDoc による説明を付与 ([48598b9](https://github.com/otusoa/lism-ui-vue/commit/48598b9))
- **core:** プロパティ正規化の改善とレイアウトコンポーネントの追加 - `max-w` 等の消失問題を修正するためアダプターの正規化ロジックを改善。 ([977ae51](https://github.com/otusoa/lism-ui-vue/commit/977ae51))
- **composable:** Composable周りの設定をゴニョゴニョ コンポーザブルを lism-ui-vue/composables として独立したサブパスからインポート可能に変更 ディレクトリ構成を src/composables に整理し、ビルド設定を更新 動作確認用の useTest コンポーザブルを追加 ([0f0f29d](https://github.com/otusoa/lism-ui-vue/commit/0f0f29d))

### 🔥 Performance

- Lism-ui-vue 向け Nuxt モジュールのパフォーマスを改善 ([c6682c1](https://github.com/otusoa/lism-ui-vue/commit/c6682c1))

### 🩹 Fixes

- **components:** コンポーネントを配布用に調整 ([0e4d571](https://github.com/otusoa/lism-ui-vue/commit/0e4d571))
- **tsconfig:** 外部ライブラリのエラーが出ないように修正 ([3c96b55](https://github.com/otusoa/lism-ui-vue/commit/3c96b55))
- Lism系コンポーネントのみ型サジェストをするように修正 ([29f6bcc](https://github.com/otusoa/lism-ui-vue/commit/29f6bcc))
- **useLIsm.ts:** InheritAttrs: false を全コンポーネントに追加 → 属性の二重出力を解消 kebab→camelCase 変換 を useLism.ts に追加 → is-container が isContainer（STATES キー）に正しくマッチし、is--container クラスが生成されるように 空文字列の正規化 → Vue 特有の "" を true フラグとして扱うよう修正 ([408a4b8](https://github.com/otusoa/lism-ui-vue/commit/408a4b8))
- **Layer:** Layer専用のPropsがサジェストされないのを修正 ([feb14a5](https://github.com/otusoa/lism-ui-vue/commit/feb14a5))
- **nuxt-modules:** いらないエラー変数を削除 ([876217f](https://github.com/otusoa/lism-ui-vue/commit/876217f))

### 💅 Refactors

- **useLIsm.ts, lism-adapter.ts:** Src/core/lism-adapter.ts : useLism.ts から移動・改称し、役割を「アダプター」として定義。 src/core/types.ts : コンポーネントフォルダからコア型定義を移動。 ([0fae0d1](https://github.com/otusoa/lism-ui-vue/commit/0fae0d1))

### 📖 Documentation

- **readme:** Readmeの更新 ([742bd5d](https://github.com/otusoa/lism-ui-vue/commit/742bd5d))
- すべてのReadMeファイルの更新 ([19119d5](https://github.com/otusoa/lism-ui-vue/commit/19119d5))

### 📦 Build

- **vite:** ビルドシステム(主にdev)を改善 ([3b2dc9b](https://github.com/otusoa/lism-ui-vue/commit/3b2dc9b))

### 🏡 Chore

- **unjs/changelogen:** Unjs/changelogenを追加 ([5907eef](https://github.com/otusoa/lism-ui-vue/commit/5907eef))
- **nuxt-modules:** Package.jsonのreleaseの挙動を改善 ([c763824](https://github.com/otusoa/lism-ui-vue/commit/c763824))
- **nuxt/package.json:** Package.jsonの更新 ([5d9bf73](https://github.com/otusoa/lism-ui-vue/commit/5d9bf73))
- **package.json:** Package.jsonの更新 ([8d8f9d4](https://github.com/otusoa/lism-ui-vue/commit/8d8f9d4))
- **package.json:** 結論：バカ publishConfigを設定してなくてpublishできなかった ([9e1fcce](https://github.com/otusoa/lism-ui-vue/commit/9e1fcce))
- **package.json:** リリースの設定を変更 ([2aa391c](https://github.com/otusoa/lism-ui-vue/commit/2aa391c))
- **release:** V0.1.1 ([dc0badc](https://github.com/otusoa/lism-ui-vue/commit/dc0badc))

### ✅ Tests

- テストを追加 ([6118353](https://github.com/otusoa/lism-ui-vue/commit/6118353))

### 🤖 CI

- Ciファイルの追加 chore(deps): vueをbetaから安定版に ([5c64718](https://github.com/otusoa/lism-ui-vue/commit/5c64718))
- モノレポのCiを上に持ってきた ([4f8001e](https://github.com/otusoa/lism-ui-vue/commit/4f8001e))
- Miss ([2d35f13](https://github.com/otusoa/lism-ui-vue/commit/2d35f13))
- Viteのconfigファイルのミス ([d263555](https://github.com/otusoa/lism-ui-vue/commit/d263555))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## v0.1.1


### 🚀 Enhancements

- **Lismコンポーネント:** Lismコンポーネントを追加 ([13b30bf](https://github.com/otusoa/lism-ui-vue/commit/13b30bf))
- **Lismコンポーネント:** LismClassとvariantプロパティを追加し、Lismコンポーネントの使用を拡張 ([47adc35](https://github.com/otusoa/lism-ui-vue/commit/47adc35))
- Update pnpm workspace to include '@parcel/watcher' as a built dependency ([1681454](https://github.com/otusoa/lism-ui-vue/commit/1681454))
- **型推論、auto-import:** Auto-importを改善。型推論をできるようにした。 ([81b9b85](https://github.com/otusoa/lism-ui-vue/commit/81b9b85))
- **nuxt-modules:** 別々で公開できるようにした ([41c76c7](https://github.com/otusoa/lism-ui-vue/commit/41c76c7))
- Lismコアコンポーネントおよび基礎的なレイアウトコンポーネント（Box, Flex, Stack, Grid, Container）の追加 ([c4a1532](https://github.com/otusoa/lism-ui-vue/commit/c4a1532))
- レイアウトコンポーネントの拡充とアーキテクチャの最適化 - 新規コンポーネントの追加: LismCluster, LismFrame, LismSideMain, LismLayer  - 全レイアウトコンポーネントで公式準拠の `layout="xxx"` プロパティによる制御を採用  - 各コンポーネントの Props 型定義を強化し、JSDoc による説明を付与 ([48598b9](https://github.com/otusoa/lism-ui-vue/commit/48598b9))
- **core:** プロパティ正規化の改善とレイアウトコンポーネントの追加 - `max-w` 等の消失問題を修正するためアダプターの正規化ロジックを改善。 ([977ae51](https://github.com/otusoa/lism-ui-vue/commit/977ae51))
- **composable:** Composable周りの設定をゴニョゴニョ コンポーザブルを lism-ui-vue/composables として独立したサブパスからインポート可能に変更 ディレクトリ構成を src/composables に整理し、ビルド設定を更新 動作確認用の useTest コンポーザブルを追加 ([0f0f29d](https://github.com/otusoa/lism-ui-vue/commit/0f0f29d))

### 🔥 Performance

- Lism-ui-vue 向け Nuxt モジュールのパフォーマスを改善 ([c6682c1](https://github.com/otusoa/lism-ui-vue/commit/c6682c1))

### 🩹 Fixes

- **components:** コンポーネントを配布用に調整 ([0e4d571](https://github.com/otusoa/lism-ui-vue/commit/0e4d571))
- **tsconfig:** 外部ライブラリのエラーが出ないように修正 ([3c96b55](https://github.com/otusoa/lism-ui-vue/commit/3c96b55))
- Lism系コンポーネントのみ型サジェストをするように修正 ([29f6bcc](https://github.com/otusoa/lism-ui-vue/commit/29f6bcc))
- **useLIsm.ts:** InheritAttrs: false を全コンポーネントに追加 → 属性の二重出力を解消 kebab→camelCase 変換 を useLism.ts に追加 → is-container が isContainer（STATES キー）に正しくマッチし、is--container クラスが生成されるように 空文字列の正規化 → Vue 特有の "" を true フラグとして扱うよう修正 ([408a4b8](https://github.com/otusoa/lism-ui-vue/commit/408a4b8))
- **Layer:** Layer専用のPropsがサジェストされないのを修正 ([feb14a5](https://github.com/otusoa/lism-ui-vue/commit/feb14a5))
- **nuxt-modules:** いらないエラー変数を削除 ([876217f](https://github.com/otusoa/lism-ui-vue/commit/876217f))

### 💅 Refactors

- **useLIsm.ts, lism-adapter.ts:** Src/core/lism-adapter.ts : useLism.ts から移動・改称し、役割を「アダプター」として定義。 src/core/types.ts : コンポーネントフォルダからコア型定義を移動。 ([0fae0d1](https://github.com/otusoa/lism-ui-vue/commit/0fae0d1))

### 📖 Documentation

- **readme:** Readmeの更新 ([742bd5d](https://github.com/otusoa/lism-ui-vue/commit/742bd5d))
- すべてのReadMeファイルの更新 ([19119d5](https://github.com/otusoa/lism-ui-vue/commit/19119d5))

### 📦 Build

- **vite:** ビルドシステム(主にdev)を改善 ([3b2dc9b](https://github.com/otusoa/lism-ui-vue/commit/3b2dc9b))

### 🏡 Chore

- **unjs/changelogen:** Unjs/changelogenを追加 ([5907eef](https://github.com/otusoa/lism-ui-vue/commit/5907eef))
- **nuxt-modules:** Package.jsonのreleaseの挙動を改善 ([c763824](https://github.com/otusoa/lism-ui-vue/commit/c763824))
- **nuxt/package.json:** Package.jsonの更新 ([5d9bf73](https://github.com/otusoa/lism-ui-vue/commit/5d9bf73))
- **package.json:** Package.jsonの更新 ([8d8f9d4](https://github.com/otusoa/lism-ui-vue/commit/8d8f9d4))
- **package.json:** 結論：バカ publishConfigを設定してなくてpublishできなかった ([9e1fcce](https://github.com/otusoa/lism-ui-vue/commit/9e1fcce))
- **package.json:** リリースの設定を変更 ([2aa391c](https://github.com/otusoa/lism-ui-vue/commit/2aa391c))

### ✅ Tests

- テストを追加 ([6118353](https://github.com/otusoa/lism-ui-vue/commit/6118353))

### 🤖 CI

- Ciファイルの追加 chore(deps): vueをbetaから安定版に ([5c64718](https://github.com/otusoa/lism-ui-vue/commit/5c64718))
- モノレポのCiを上に持ってきた ([4f8001e](https://github.com/otusoa/lism-ui-vue/commit/4f8001e))
- Miss ([2d35f13](https://github.com/otusoa/lism-ui-vue/commit/2d35f13))
- Viteのconfigファイルのミス ([d263555](https://github.com/otusoa/lism-ui-vue/commit/d263555))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

