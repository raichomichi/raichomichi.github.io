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
このサイトは Google タグ マネージャーを読み込み、計測タグを管理しています。コンテナで Google アナリティクス 4（GA4）が有効な場合、以下のアクセス解析を行います。
{% elsif jekyll.environment == 'production' and ga4_id != empty %}
このサイトは Google アナリティクス 4（GA4）を使い、以下のアクセス解析を行っています。
{% else %}
現在、このサイトでは Google アナリティクス 4（GA4）と Google タグ マネージャーのタグを読み込んでいません。
{% endif %}

アクセス解析の目的は、よく読まれている地域ガイドや訪問者が使う端末を把握し、記事やナビゲーションを改善することです。GA4 を使用する場合、閲覧したページの URL、参照元、端末・ブラウザーの情報、操作に関するデータなどが Google に送信されます。訪問の識別には Cookie が使われることがあります。[Google によるデータの取り扱い](https://policies.google.com/technologies/partner-sites?hl=ja)

Cookie の保存や削除はブラウザーの設定で管理できます。対応ブラウザーでは、Google が提供するアドオンで GA4 へのデータ送信を停止できます。[Google アナリティクス オプトアウト アドオン](https://tools.google.com/dlpage/gaoptout?hl=ja)

## お問い合わせ

このサイトでの情報の取り扱いに関するご質問は、運営者の窓口で受け付けています。[muchuu.net のお問い合わせフォーム]({{ site.contact_url }})
