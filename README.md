# 雷鳥の道（raichomichi）

**北アルプスから、つくる・試す・つながる。**

雷鳥の道は、長野県の北アルプス地域と安曇野市・松本市・塩尻市を舞台に、Webやデジタル技術で「こんなものがあったら」を試してみる、ytsuyuzaki の個人プロジェクトです。地域の情報を集めたリンク集、民話を題材にしたゲーム、オープンデータや生成AIを使ったツールなど、思いついたものを作り、試行錯誤の途中から公開していきます。

このリポジトリでは、活動と制作物への入口となるJekyllサイトを管理しています。地域のイベント情報、共同制作のお誘い、仕事のご相談は運営者の個人サイトへどうぞ。

- [公開サイト「雷鳥の道」](https://raichomichi.github.io/)
- [GitHub Organization](https://github.com/raichomichi)
- [運営者 ytsuyuzaki・お問い合わせ](https://muchuu.net/)

## 手元で表示する

Ruby 3.3とBundlerを使います。[Gemfile](Gemfile) の `github-pages` は[公開環境のバージョン](https://pages.github.com/versions/)に合わせています。Bundlerが生成する `Gemfile.lock` はローカルで管理します。

リポジトリのルートで次のコマンドを実行し、ブラウザで [ローカルプレビュー](http://127.0.0.1:4000/) を開きます。ページ本文や作品データを保存すると再ビルドされます。

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

## ページを編集する

| 公開ページ | 編集するファイル | 内容 |
| --- | --- | --- |
| トップ | [index.html](index.html) | 紹介文、挿絵、活動のアイデア |
| プロジェクト一覧 | [_data/projects.yml](_data/projects.yml) | 公開した制作物。案内文と表示形式は [projects.html](projects.html) で編集 |
| この活動について | [about.md](about.md) | 活動の目的・地域、名前の由来、運営と参加について |

共通のナビゲーションと連絡先URLは [_config.yml](_config.yml)、ヘッダーとフッターは [_layouts/default.html](_layouts/default.html)、配色やレイアウトは [assets/css/site.css](assets/css/site.css) で編集します。`_config.yml` を変更したときはプレビューを再起動してください。

### 作品を1件追加する

最初の作品を掲載するときは、`_data/projects.yml` の `[]` を次の形式に置き換え、名前・紹介文・URLを実際の作品に合わせます。2件目以降は同じ形式で項目を追加します。上から記載順に表示されます。

```yaml
- name: "作品名"
  description: "誰が何に使える作品かを一文で紹介します。"
  site_url: "https://example.org/"
  repo_url: "https://github.com/raichomichi/example"
```

`site_url`（公開サイト）と `repo_url`（ソースコード）は、どちらか一方だけでも掲載できます。使わない方は行ごと省略してください。最初の作品を登録すると初回案内が一覧に切り替わり、`[]` に戻すと再び案内が表示されます。

## 公開する

1. `bundle exec jekyll build` でビルドし、プレビューでトップ・プロジェクト一覧・活動紹介を確認します。
2. ソースと作品データの変更を `main` に反映します。GitHub Pagesは `main` のルート（`/`）からサイトをビルドして公開します。`_site/` はローカルの生成先です。
3. [GitHub Actions](https://github.com/raichomichi/raichomichi.github.io/actions) でPagesのデプロイ完了を確認し、[公開サイト](https://raichomichi.github.io/) で表示とリンクを確認します。

<details>
<summary>トップページの挿絵</summary>

[山と雷鳥の挿絵](assets/images/raicho-alps.webp) は、このサイト用にImageGenで生成し、WebP形式で収録しました。制作時のプロンプトを以下に記します。

> 北アルプスの稜線と、岩場に立つ一羽のニホンライチョウ。横長の自然観察図版を、深緑の細いペン線とセージ色、淡い空色の版画で描く。手前にふっくらした斑羽と赤い眉の成鳥、奥に残雪の峰とハイマツ。余白を残した白い紙、輪郭は紙へ自然にほどける。文字・額縁なし。

</details>
