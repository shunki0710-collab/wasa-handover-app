# WASA 引継ぎ書の専用入口

公開URL：https://shunki0710-collab.github.io/wasa-handover-app/

iPhone/iPadはSafariで開き、共有メニューから「ホーム画面に追加」。AndroidはChromeで「ホーム画面に追加」またはインストール。PCはChromeの「ページをアプリとしてインストール」を使います。

このリポジトリには入口ページ・manifest・アイコンだけを置き、本文や認証情報は置きません。データと編集・閲覧の認証は既存のGoogle Apps Scriptを使います。アプリストア配布・オフライン閲覧は提供していません。

アイコンはWASA天文プロジェクトのロゴを参考に、月・流れ星・天文とWASAの文字を残して軽くデフォルメした画像です。

実装の正本は非公開のWASAサイトプロジェクト内の `app/launcher/`。この8つの公開ファイルとREADMEだけを専用リポジトリへコピーします。Apps Script側の公開は別途claspで行います。変更時は両方の公開を確認してください。
