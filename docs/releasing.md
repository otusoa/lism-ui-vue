# リリース手順

Release Please がバージョン、CHANGELOG、タグ、GitHub Releaseを管理します。npm公開は `.github/workflows/publish.yml` が担当します。

## 初期設定

1. このリポジトリのみを対象にした fine-grained Personal Access Token を作成します。Repository permissions の **Contents**、**Issues**、**Pull requests** に Read and write を付与してください。
2. Settings → Secrets and variables → Actions に `RELEASE_PLEASE_TOKEN` として登録します。Release Pleaseが作成するPRでも通常のCIを起動するため、標準の `GITHUB_TOKEN` ではなくこのトークンを使います。
3. npmの各パッケージの Trusted Publisher が、GitHubユーザー `otusoa`、リポジトリ `lism-ui-vue`、ワークフロー `publish.yml` を対象としていることを確認します。npm公開では既存のOIDC認証とProvenanceを使います。
4. この変更を `main` にマージします。CI成功後、リリース対象の変更があればリリース用PRが作成されます。対象がなければ、次の `fix:` / `feat:` の変更を待ちます。

GitHub側の権限設定によってPR作成が拒否される場合は、Settings → Actions → General の「Allow GitHub Actions to create and approve pull requests」も確認してください。トークンが期限切れになった場合は同じSecretを更新します。

## 通常の運用

1. Conventional Commitsに沿った変更PRを `main` にマージします。Squash mergeの場合は、PRタイトルが最終コミットメッセージになるため `fix:` / `feat:` などを付けます。
2. Release Pleaseが作成・更新するリリース用PRで、バージョンとCHANGELOGを確認します。
3. リリース用PRをマージします。全パッケージのCI成功後、対象パッケージのGitHub Releaseとnpm公開が実行されます。

正式版の本体では `fix:` はpatch、`feat:` はminor、`feat!:` または `BREAKING CHANGE:` はmajorの更新になります。通常の `chore:` や `docs:` だけではリリースされません。

現在のバージョンは `.release-please-manifest.json` に記録します。移行時の本体は `1.0.0`、Nuxtモジュールは `0.1.1-alpha.5` です。`bootstrap-sha` は本体1.0.0のコミットを起点とし、GitHub Releaseがまだない本体の過去の変更を再収録することを防ぎます。Nuxtモジュールには既存のGitHub Releaseがあります。

タグ形式は従来どおり `lism-ui-vue@v1.0.1` と `@lism-ui-vue/nuxt@v0.1.1-alpha.6` です。本体は `apps/` の変更を除外し、Nuxtモジュールは自身のディレクトリの変更を対象とします。`node-workspace` プラグインにより、本体の更新時には依存するNuxtモジュールも更新対象になります。`workspace:*` の指定は維持され、pnpmが公開時に実際の本体バージョンへ変換します。

## プレリリース

Nuxtモジュールは移行後もalpha版を継続します。`release-please-config.json` の該当パッケージに `versioning: prerelease`、`prerelease: true`、`prerelease-type: alpha` を指定しています。1.0.0未満では機能追加もpatch単位のalpha版として提案します。

公開種別は、このファイルを手動で編集して指定します。alpha版・beta版・rc版には `prerelease-type` をそれぞれ `alpha`・`beta`・`rc` に設定します。正式版にはこの3設定を取り除きます。本体にも同じ設定を指定できます。

現在のalpha版からbeta版など別の種別へ切り替える場合は、設定変更だけでは既存の接尾辞が残ることがあります。対象パッケージの変更コミットに `Release-As: 0.1.1-beta.1` など、次の完全なバージョンを指定するフッターを付けてください。正式版への移行でも `Release-As: 1.0.0` などを指定できます。リリース用PRでバージョンを確認してからマージします。

npmの公開タグは、公開する各パッケージの `version` から自動で決まります。`1.1.0-alpha.1` は `alpha`、`1.1.0-beta.1` は `beta`、`1.1.0-rc.1` は `rc`、`1.1.0` は `latest` になります。公開種別を変えても `publish.yml` の編集は不要です。

## npm公開が失敗した場合

GitHub Releaseの作成とnpm公開は別の処理です。npm公開に失敗してもGitHub Releaseは残ります。

1. Actions → **Release Please and npm publish** の失敗した実行を開きます。
2. **Re-run jobs → Re-run failed jobs** を選択します。
3. 成功済みのRelease Pleaseジョブの出力を使い、失敗した公開ジョブを再試行します。本体は公開済みならスキップされ、その後Nuxtモジュールの公開を続けます。

**Re-run all jobs** や新しい **Run workflow** では、Release Pleaseが新規リリースを検出しないと公開ジョブが実行されません。公開だけの再試行には **Re-run failed jobs** を使ってください。

公開処理はRelease Pleaseが返したリリース対象のコミットをチェックアウトします。pnpmのrecursive publishを使用するため、npmに同じバージョンがある場合は再公開をスキップします。

## 設定と検証

- `release-please-config.json`: パッケージ、タグ形式、プレリリース方針。
- `.release-please-manifest.json`: 最後にリリースしたバージョン。
- `.github/workflows/publish.yml`: CI → Release Please → npm公開。

参考: [Release Please Action](https://github.com/googleapis/release-please-action)、[Manifest設定](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md)、[npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)。
