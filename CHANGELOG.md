# Changelog


## lism-ui-vue@v0.1.2-alpha.10

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/@lism-ui-vue/nuxt@v0.1.1-alpha.5...lism-ui-vue@v0.1.2-alpha.10)

### 🚀 Enhancements

- **Rename:** CoreAdapterのSTATESをTRAITSにリネーム ([6f338e2](https://github.com/otusoa/lism-ui-vue/commit/6f338e2))
- **Props:** Atomicとutilを追加し、型を変更、そしてAdapterでatomicとutilを解析対象に入れる ([c02aba7](https://github.com/otusoa/lism-ui-vue/commit/c02aba7))
- **Divider:** Dividerを追加し、軽微な修正 ([fad5d9d](https://github.com/otusoa/lism-ui-vue/commit/fad5d9d))
- **spacer:** Spacerを追加 ([0c18664](https://github.com/otusoa/lism-ui-vue/commit/0c18664))
- **Iconコンポーネント:** Iconを追加 ([7807349](https://github.com/otusoa/lism-ui-vue/commit/7807349))

### 🩹 Fixes

- **Core:** PrimitiveClassで帰ってくるのをclassで受け止めるようにし、ホバー周りのバグを直した。 testの追加 ([f5a9d0f](https://github.com/otusoa/lism-ui-vue/commit/f5a9d0f))
- **UI:** DummyUIコンポーネントが壊れていたため修正 ([6788004](https://github.com/otusoa/lism-ui-vue/commit/6788004))
- バグを修正 ([07bb694](https://github.com/otusoa/lism-ui-vue/commit/07bb694))

### 💅 Refactors

- **Lismコンポーネント,Core:** LismClassとvariantの存在を抹消 ([9269ea4](https://github.com/otusoa/lism-ui-vue/commit/9269ea4))
- **components:** 新しいバージョンの名称に合わせ、リネームリファクタリング ([dd58e2d](https://github.com/otusoa/lism-ui-vue/commit/dd58e2d))
- **test, types:** 型を整理、アダプターのクラスを修正 ([8b633e8](https://github.com/otusoa/lism-ui-vue/commit/8b633e8))
- **コンポーネント:** 書き方の揺れを統一 ([abab33b](https://github.com/otusoa/lism-ui-vue/commit/abab33b))

### 🌊 Types

- **core:** 変更に合わせ、型(Props)の名前をリネーム ([18e55f5](https://github.com/otusoa/lism-ui-vue/commit/18e55f5))
- **core:** 本家のほうでだいぶ前から消された、tagを削除 ([3a59d6a](https://github.com/otusoa/lism-ui-vue/commit/3a59d6a))
- **core:** 仕様に沿っていない型を削除 ([bebb578](https://github.com/otusoa/lism-ui-vue/commit/bebb578))

### ✅ Tests

- テストを仕様変更に合わせて変更、LinkBoxをリネーム ([5f018a0](https://github.com/otusoa/lism-ui-vue/commit/5f018a0))
- **Core,DummyUI:** テストファイルを変更した仕様に沿って変更 ([bfddcd9](https://github.com/otusoa/lism-ui-vue/commit/bfddcd9))
- **fix:** Class名が違ったので、テストファイルの整合性を取った ([2ecfbcd](https://github.com/otusoa/lism-ui-vue/commit/2ecfbcd))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## lism-ui-vue@v0.1.2-alpha.9

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/lism-ui-vue@v0.1.2-alpha.8...lism-ui-vue@v0.1.2-alpha.9)

### 🩹 Fixes

- **Decorator:** Nitpickを修正 ([0a71924](https://github.com/otusoa/lism-ui-vue/commit/0a71924))
- **decorator:** Nitpickを処理 ([6f06708](https://github.com/otusoa/lism-ui-vue/commit/6f06708))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## lism-ui-vue@v0.1.2-alpha.8

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/lism-ui-vue@v0.1.2-alpha.7...lism-ui-vue@v0.1.2-alpha.8)

### 🚀 Enhancements

- **TileGrid:** TileGridを追加 ([83b3a86](https://github.com/otusoa/lism-ui-vue/commit/83b3a86))
- **LismLinkBox): LismLinkBoxを追加 types(setClass:** 型を追加 ([88cb822](https://github.com/otusoa/lism-ui-vue/commit/88cb822))

### 🩹 Fixes

- **core/lism-adapter:** SetClassに関する処理を追加 ([1b0a83a](https://github.com/otusoa/lism-ui-vue/commit/1b0a83a))
- **TileGrid:** Lismコンポーネント荷転送する周りを修正 ([8d7d1d2](https://github.com/otusoa/lism-ui-vue/commit/8d7d1d2))

### ✅ Tests

- 重要なファイルにテストを追加 ([1b9ce59](https://github.com/otusoa/lism-ui-vue/commit/1b9ce59))

### 🤖 CI

- **ci:** テストをするように追加 ([132cb3b](https://github.com/otusoa/lism-ui-vue/commit/132cb3b))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## lism-ui-vue@v0.1.2-alpha.7

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/@lism-ui-vue/nuxt@v0.1.1-alpha.3...lism-ui-vue@v0.1.2-alpha.7)

### 🚀 Enhancements

- **コンポーネント:** セマンティックコンポーネントを追加 ([ce10f12](https://github.com/otusoa/lism-ui-vue/commit/ce10f12))
- **Mediaコンポーネント:** メディアコンポーネントを追加 ([95de112](https://github.com/otusoa/lism-ui-vue/commit/95de112))
- **storybook): コンポーネントをすべてカバーするStoryを追加 ci: ciが終わらないと、publishできないようにした。 chore(deps:** Lism-cssをアップデート ([d4110bb](https://github.com/otusoa/lism-ui-vue/commit/d4110bb))

### 🩹 Fixes

- **型サジェスト:** 型サジェストが正常に機能するように修正 ([62a602a](https://github.com/otusoa/lism-ui-vue/commit/62a602a))
- **storybook:** 未使用のインポートを削除 ([86f9fae](https://github.com/otusoa/lism-ui-vue/commit/86f9fae))
- コードラビット様のごレビューでご修正しました ([c57c3b3](https://github.com/otusoa/lism-ui-vue/commit/c57c3b3))

### 💅 Refactors

- LismLayerのプロパティ整理とLismDummyの自前実装への移行 - LismLayer: FilterName および FilterProps を廃止 - LismDummy: lism-css の仕様変更に伴い、ダミーテキスト生成ロジックを内部実装 (dummy-adapter) へ移行 - types: 不要となった FilterName, FilterProps を src/core/types.ts から削除 - playground: ダミーコンポーネントの使用箇所を LismUiDummy に更新 ([c6e003c](https://github.com/otusoa/lism-ui-vue/commit/c6e003c))

### 🌊 Types

- **components:** LismBasePropsの改善と公式のAllowedTag型適用によるサジェストの最適化およびJSDoc追加 ([3579712](https://github.com/otusoa/lism-ui-vue/commit/3579712))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## lism-ui-vue@v0.1.2-alpha.6

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/lism-ui-vue@v0.1.2-alpha.5...lism-ui-vue@v0.1.2-alpha.6)

### 🚀 Enhancements

- **dummyコンポーネント): dummyを追加 fix(storyboook:** 一部のストーリーの壊れていたパスを修正 ([8166b90](https://github.com/otusoa/lism-ui-vue/commit/8166b90))

### 🩹 Fixes

- **dummy:** V-htmlの挙動の変更 imgProps の算出ロジック変更 `src/core/dummy-adapter.ts` における pre プロパティの XSS 脆弱性を修正しました。 ([d59126f](https://github.com/otusoa/lism-ui-vue/commit/d59126f))
- **adpter:** Offset の正規化 ([2bdec01](https://github.com/otusoa/lism-ui-vue/commit/2bdec01))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

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

