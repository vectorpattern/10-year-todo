# 10年ToDo

GitHub Pagesで公開できる、10年分の同じ日付を振り返るシンプルなToDoアプリです。

## 使い方

`index.html` をローカルHTTPサーバーで開くか、GitHub Pagesに公開します。Firebase未設定でもタスクはブラウザのローカルストレージに保存されます。重要度、数値での必要時間、完了状態を記録でき、重要度順・時間順に並べ替えできます。JSONとCSVのバックアップを書き出せます。

## Firebase同期の設定（任意）

1. Firebaseプロジェクトを作成します。Authenticationで「メール/パスワード」を有効にします。
2. Cloud Firestoreデータベースを作成し、`firestore.rules` のルールを公開します。
3. Firebaseコンソールの「プロジェクトの設定」からWebアプリを登録します。
4. `firebase-config.js` の空欄にWebアプリの `apiKey`、`authDomain`、`projectId`、`appId` を貼ります。サービスアカウント鍵などの秘密情報は入れないでください。
5. GitHub Pagesでリポジトリの公開元を設定して公開します。

設定画面から同じメールアドレスとパスワードで各端末にログインすると同期します。データはユーザーごとに分離され、ルールで本人だけが読み書きできます。Firebaseの無料枠は利用量などの条件があります。不要な課金を避けるにはFirebaseコンソールの予算アラートも設定してください。

## GitHub Pages

ビルド不要です。公開手順は次のとおりです。

1. GitHubで新しいリポジトリを作り、このフォルダのファイルをpushします。
2. リポジトリの **Settings → Pages** を開きます。
3. **Deploy from a branch** を選び、公開ブランチ（通常は `main`）と `/ (root)` を指定して保存します。
4. 表示された `https://<アカウント名>.github.io/<リポジトリ名>/` をiPhoneのSafariで開き、共有メニューからホーム画面に追加できます。

この作業環境での公開準備状況: GitHub CLIはありますが、保存されているGitHub認証が無効で、外部への接続も使えないため、リポジトリ作成・push・Pages有効化はまだ実行できません。接続できる環境で `gh auth login` を実行して認証し、GitHubリポジトリを作成してpushしてください。

Firebase未設定でも公開URLから閲覧・利用できますが、データはそのブラウザ内に保存されます。MacとiPhoneでタスクを同期するには、FirebaseのAuthentication/Firestore設定と `firebase-config.js` の設定が別途必要です。Firebase SDKの読み込みにはインターネット接続が必要です。
