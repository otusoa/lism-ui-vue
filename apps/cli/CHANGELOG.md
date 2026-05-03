# Changelog


## cli-v0.1.1-alpha.12

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.11...cli-v0.1.1-alpha.12)

## cli-v0.1.1-alpha.11

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.10...cli-v0.1.1-alpha.11)

## cli-v0.1.1-alpha.10

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.9...cli-v0.1.1-alpha.10)

### 🩹 Fixes

- **command:** ⚠️  Templateコマンドを追加 Nuxtテンプレートもそこに統合 ([3fd30f9](https://github.com/otusoa/lism-ui-vue/commit/3fd30f9))
- **cli:** JSをfix ([a1e7224](https://github.com/otusoa/lism-ui-vue/commit/a1e7224))

### 📖 Documentation

- **readme:** Readmeを更新 ([631420d](https://github.com/otusoa/lism-ui-vue/commit/631420d))

### ✅ Tests

- **cli:** 既存テストをVitestへ移行 & update-notifierの検証を追加 ([9c8cde2](https://github.com/otusoa/lism-ui-vue/commit/9c8cde2))
- **cli:** Vitestを導入し通知テストを追加 & ヘルプメッセージを改善 ([b3aa0af](https://github.com/otusoa/lism-ui-vue/commit/b3aa0af))

#### ⚠️ Breaking Changes

- **command:** ⚠️  Templateコマンドを追加 Nuxtテンプレートもそこに統合 ([3fd30f9](https://github.com/otusoa/lism-ui-vue/commit/3fd30f9))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.9

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.8...cli-v0.1.1-alpha.9)

### 🩹 Fixes

- **CLI check:** 間違ったコマンドを提案するのを修正 ([2f37861](https://github.com/otusoa/lism-ui-vue/commit/2f37861))

### 🤖 CI

- Goのpublish以外のCiを追加 ([9d2015f](https://github.com/otusoa/lism-ui-vue/commit/9d2015f))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.8

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.7...cli-v0.1.1-alpha.8)

### 🩹 Fixes

- **Usage:** Usageコマンドのヘルプ表示がうまく動作していなかったので修正 ([15a252d](https://github.com/otusoa/lism-ui-vue/commit/15a252d))
- **check:** チェックコマンドの挙動がUX的に悪かったので修正 ([feaa278](https://github.com/otusoa/lism-ui-vue/commit/feaa278))
- Update notifierの依存関係を整理し、devDependenciesからdependenciesに移動。その他コードをリファクタリング ([6c39581](https://github.com/otusoa/lism-ui-vue/commit/6c39581))

### 💅 Refactors

- **publish-npm:** 処理を非同期にして、効率化。またエラー耐性をつけた ([7d8da60](https://github.com/otusoa/lism-ui-vue/commit/7d8da60))
- ESmoduleにすべて統一。バージョンが古いと新しいバージョンありますと表示する機能を追加 ([84f9458](https://github.com/otusoa/lism-ui-vue/commit/84f9458))

### ✅ Tests

- **wrapper:** 簡単なテストファイルを設置 ([b79cff7](https://github.com/otusoa/lism-ui-vue/commit/b79cff7))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.7

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.6...cli-v0.1.1-alpha.7)

### 🚀 Enhancements

- **checkコマンド:** チェックコマンドを追加 ([9ead5c8](https://github.com/otusoa/lism-ui-vue/commit/9ead5c8))

### 🩹 Fixes

- **lefthook:** Sync-optional-dependencies.jsをpreで実行 ([6a26f95](https://github.com/otusoa/lism-ui-vue/commit/6a26f95))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.6

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.5...cli-v0.1.1-alpha.6)

## cli-v0.1.1-alpha.5

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.4...cli-v0.1.1-alpha.5)

### 🚀 Enhancements

- **CLI:** Npxやローカルからの呼び出しを区別して、コマンドの内容を変える ([8b38f8a](https://github.com/otusoa/lism-ui-vue/commit/8b38f8a))

### 🩹 Fixes

- Reviewに沿って修正 ([89836fc](https://github.com/otusoa/lism-ui-vue/commit/89836fc))

### 📖 Documentation

- **README.md:** READMEを追加 ([fbd34b5](https://github.com/otusoa/lism-ui-vue/commit/fbd34b5))

### 🎨 Styles

- **pkg:** 整形、ついでにnuxt.goの日本語文字を置換 ([e22125d](https://github.com/otusoa/lism-ui-vue/commit/e22125d))

### 🤖 CI

- **publish:** タグ付け周りを改善 ([4e87015](https://github.com/otusoa/lism-ui-vue/commit/4e87015))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.4

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.3...cli-v0.1.1-alpha.4)

### 🏡 Chore

- **publish:** Publish周りをした ([ecf2a0e](https://github.com/otusoa/lism-ui-vue/commit/ecf2a0e))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.3

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.2...cli-v0.1.1-alpha.3)

## cli-v0.1.1-alpha.2

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.1...cli-v0.1.1-alpha.2)

### 🩹 Fixes

- Package.jsonに色々追加, 軽微な変更 ([94fbd37](https://github.com/otusoa/lism-ui-vue/commit/94fbd37))

### 🏡 Chore

- **comment:** いらないコメントを削除 ([fdd15e9](https://github.com/otusoa/lism-ui-vue/commit/fdd15e9))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.1

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/cli-v0.1.1-alpha.0...cli-v0.1.1-alpha.1)

### 🤖 CI

- **publish:** Publishを修正 ([5c6311a](https://github.com/otusoa/lism-ui-vue/commit/5c6311a))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

## cli-v0.1.1-alpha.0

[compare changes](https://github.com/otusoa/lism-ui-vue/compare/lism-ui-vue@v0.1.2-alpha.10...cli-v0.1.1-alpha.0)

### 🚀 Enhancements

- **lefthook:** Lefthookを追加 ([0b6002e](https://github.com/otusoa/lism-ui-vue/commit/0b6002e))
- **go-cli:** Init機能を追加 ([cc1096c](https://github.com/otusoa/lism-ui-vue/commit/cc1096c))
- **npm:** 配布できるようにした ([815e4e1](https://github.com/otusoa/lism-ui-vue/commit/815e4e1))

### 🩹 Fixes

- Lintに合わせて修正 ([30926a7](https://github.com/otusoa/lism-ui-vue/commit/30926a7))
- コードレビューに従って修正 ([a21d9bc](https://github.com/otusoa/lism-ui-vue/commit/a21d9bc))

### 🏡 Chore

- **init:** GoのCLIのinitをした ([1e7f6e8](https://github.com/otusoa/lism-ui-vue/commit/1e7f6e8))

### ❤️ Contributors

- Eita <kusaiyuka@gmail.com>

