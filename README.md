# 雷鳥の道（raichomichi）

**北アルプスから、つくる・試す・つながる。**

雷鳥の道は、長野県の北アルプス地域と安曇野市・松本市・塩尻市を舞台に、Webやデジタル技術で「こんなものがあったら」を試してみる、ytsuyuzaki の個人プロジェクトです。民話を題材にしたゲーム、オープンデータや生成AIを使ったツールなど、思いついたものを作り、試行錯誤の途中から公開していきます。

このJekyllサイトでは、地域の勉強会や交流会を探せる「信州のIT・デザインイベントとコミュニティ」を編集・公開しています。地域のイベント情報、共同制作のお誘い、仕事のご相談は運営者の個人サイトへどうぞ。

- [公開サイト「雷鳥の道」](https://raichonomichi.net/)
- [GitHub Organization](https://github.com/raichonomichi)
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
| [信州のIT・デザインイベントとコミュニティ](https://raichonomichi.net/guides/shinshu-tech-links/) | [リンク集のページ](shinshu-tech-links/index.html)・[掲載データ](_data/shinshu_tech_links/communities.yml) | 地域別の団体・告知元、最終更新日 |
| この活動について | [about.md](about.md) | 活動の目的・地域、名前の由来、運営と参加について |

共通のナビゲーションと連絡先URLは [_config.yml](_config.yml)、ヘッダーとフッターは [_layouts/default.html](_layouts/default.html)、配色やレイアウトは [assets/css/site.css](assets/css/site.css) で編集します。`_config.yml` を変更したときはプレビューを再起動してください。

### 作品を1件追加する

このサイト内で公開する作品は、このリポジトリにページを追加し、`_data/projects.yml` に次の形式で登録します。作品は上から記載順に表示されます。

```yaml
- name: "作品名"
  description: "誰が何に使える作品かを一文で紹介します。"
  site_url: "/example/"
  repo_url: "https://github.com/raichonomichi/raichonomichi.net/tree/main/example"
```

`site_url`（公開サイト）と `repo_url`（ソースコード）は、どちらか一方だけでも掲載できます。使わない方は行ごと省略してください。最初の作品を登録すると初回案内が一覧に切り替わり、`[]` に戻すと再び案内が表示されます。

### 信州のリンク集を更新する

- 団体・イベントシリーズ・講座の告知元は [communities.yml](_data/shinshu_tech_links/communities.yml) に追加します。地域区分は北アルプス地域（`alps`）、安曇野・松本・塩尻（`chushin`）、信州各地（`shinshu`）です。分野は IT・Web・デザイン・生成AI から選びます。複数の市町村で活動する団体は1件にまとめます。
- 各回の日程は、主催者の公式サイトや外部カレンダーへのリンクで案内します。
- 各項目の `checked_on` には公式告知を確認した日を記入します。本文の編集、掲載内容の修正や削除時には [リンク集のページ](shinshu-tech-links/index.html) 冒頭の `updated_on` を更新します。タイトル下の「最終更新日」には、これらのうち最も新しい日が表示されます。
- [ローカルのリンク集](http://127.0.0.1:4000/guides/shinshu-tech-links/) で日付、地域への移動、分野別の絞り込み、公式リンクを確認します。

### アクセス解析を設定する

[_config.yml](_config.yml) で、このサイト用の ID を設定します。初期状態は両方とも空欄です。計測タグは本番ビルド（`JEKYLL_ENV=production`）でのみ読み込みます。

- **Google タグ マネージャー経由** — `google_tag_manager_id` に `GTM-…` を指定します。タグマネージャー側でこのサイトの GA4 測定 ID を使う Google タグを全ページで配信するよう設定し、コンテナを公開します。
- **GA4 を直接使う場合** — `google_tag_manager_id` は空欄のまま、`google_analytics_id` に測定 ID（`G-…`）を指定します。両方を指定した場合はタグマネージャーが優先されます。

計測目的や配信するタグを変更する際は、[プライバシーポリシー](privacy.md) の記載も確認してください。

## 公開する

1. `bundle exec jekyll build` でビルドし、プレビューでトップ・イベントとコミュニティ・プロジェクト一覧・活動紹介を確認します。
2. ソースと作品データの変更を `main` に反映します。GitHub Pagesは `main` のルート（`/`）からサイトをビルドして公開します。`_site/` はローカルの生成先です。
3. [GitHub Actions](https://github.com/raichonomichi/raichonomichi.net/actions) でPagesのデプロイ完了を確認し、[公開サイト](https://raichonomichi.net/) で表示とリンクを確認します。

<details>
<summary>トップページの挿絵</summary>

[山と雷鳥の挿絵](assets/images/raicho-alps.webp) は、このサイト用にImageGenで生成し、WebP形式で収録しました。制作時のプロンプトを以下に記します。

> 北アルプスの稜線と、岩場に立つ一羽のニホンライチョウ。横長の自然観察図版を、深緑の細いペン線とセージ色、淡い空色の版画で描く。手前にふっくらした斑羽と赤い眉の成鳥、奥に残雪の峰とハイマツ。余白を残した白い紙、輪郭は紙へ自然にほどける。文字・額縁なし。

</details>
