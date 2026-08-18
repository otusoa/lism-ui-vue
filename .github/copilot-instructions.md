# コミットメッセージの作成ルール

Changelogenで変更履歴を生成するため、Conventional Commits形式で日本語のコミットメッセージを作成してください。

## 形式

```text
<type>(<scope>): <変更内容>
```

- `type` は変更内容に最適なものを1つ選ぶ
- `scope` は対象の機能・パッケージ・ファイル名を簡潔に書く。不要なら省略する
- 変更内容は日本語で、命令形ではなく「何を変更したか」を短く書く
- 1行目は72文字以内を目安にし、末尾に句点を付けない
- 実装の詳細や推測は書かず、変更の目的と影響を優先する

## 種類

`feat` 機能追加、`fix` バグ修正、`refactor` リファクタリング、`type` 型定義、`docs` ドキュメント、`style` スタイル変更、`test` テスト、`build` ビルド、`ci` CI、`perf` パフォーマンス改善、`types` 型定義、`chore` その他の保守

## 例

```text
feat(button): 無効状態のスタイルを追加
fix(useLism): 属性名の変換ミスを修正
refactor(core): アダプターの型定義を整理
type(core): LismUI-Vueの型定義を追加
docs: LismCSSの導入手順を更新
test: Buttonコンポーネントの状態を追加検証
chore(deps): lism-cssを更新
```

破壊的変更がある場合は、`!` または本文の `BREAKING CHANGE:` で明示してください。複数の変更がある場合は、最も重要な変更をtypeと要約に反映してください。
