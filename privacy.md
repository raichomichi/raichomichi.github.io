---
layout: article
title: プライバシーポリシー
description: 雷鳥の道の配信やアクセス解析に使われるデータ、その利用目的、お問い合わせ先を案内します。
permalink: /privacy/
---
「雷鳥の道」は、muchuu.net（露崎勇大）が運営しています。

## サイトの配信

このサイトは GitHub Pages で公開しています。GitHub はセキュリティのため、アクセス元の IP アドレスを記録します。[GitHub Pages のデータ収集](https://docs.github.com/ja/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)

「地図でたどる塩の道」では、地図を表示するときに国土地理院から地図画像を読み込みます。その際、ブラウザーは国土地理院のサーバーに接続し、表示範囲に応じた地図画像をリクエストします。[地理院タイルについて](https://maps.gsi.go.jp/development/ichiran.html)

## アクセス解析

{% assign gtm_id = site.google_tag_manager_id | strip %}
{% assign ga4_id = site.google_analytics_id | strip %}
{% if jekyll.environment == 'production' and gtm_id != empty %}
このサイトは Google タグ マネージャー（GTM）で計測タグを管理しています。GTM から Google アナリティクス 4（GA4）のタグを配信すると、以下のアクセス解析が始まります。
{% elsif jekyll.environment == 'production' and ga4_id != empty %}
このサイトは Google アナリティクス 4（GA4）でアクセスを解析しています。
{% else %}
現在、このサイトでは Google アナリティクス 4（GA4）と Google タグ マネージャーのタグを読み込んでいません。
{% endif %}

### 収集する情報と利用目的

GA4 の計測時には、ブラウザーから Google LLC に、閲覧したページの URL、参照元、端末やブラウザーの種類、ページ上の操作に関する情報が送信されます。GA4 は同じブラウザーからの再訪問を識別するために、このサイトの Cookie に保存した識別子を利用することがあります。運営者は集計結果から、よく読まれる地域ガイドや利用の多い端末を把握し、記事の内容やサイト内の案内を改善します。

Google アナリティクス利用規約は、氏名やメールアドレスなど、Google が個人を特定できる情報を運営者が GA4 に送信することを原則として禁じています。[Google アナリティクス利用規約（第7条「プライバシー」）](https://marketingplatform.google.com/about/analytics/terms/jp/)

Google が受け取った情報をどのように使用するかは、次の説明をご覧ください。[Google によるサイトやアプリから収集した情報の使用](https://policies.google.com/technologies/partner-sites?hl=ja)・[Google プライバシーポリシー](https://policies.google.com/privacy?hl=ja)

### Cookie の管理と計測の停止

Cookie の保存や削除はブラウザーの設定で管理できます。対応ブラウザーでは、Google が提供するアドオンで GA4 へのデータ送信を停止できます。[Google アナリティクス オプトアウト アドオン](https://tools.google.com/dlpage/gaoptout?hl=ja)

## お問い合わせ

このサイトでの情報の取り扱いに関するご質問は、運営者の窓口で受け付けています。[muchuu.net のお問い合わせフォーム]({{ site.contact_url }})
