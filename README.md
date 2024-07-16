# taxi-mate

### サイトの構造
1. 以前まで利用していたLP ... /
2. エスエムエス型に最適化されたステップフォームLP ... /lp-1/

### 開発環境について
・ESLintというツールを導入しており、jsファイルに入ってSublime Text上で右クリックしてESLintすれば、使っていない関数などを調べることができる
・ESLintはSublimeText上にインストールしたらこちらのプロジェクトに（eslint.config.mjs）というファイルが作成された
・Sublime TextのESLintのPackage Settingには下記を書いており自分のPCのNode.jsで実行している模様
	`"node_path": "/opt/homebrew/bin"`
	`"node_modules_path": "/opt/homebrew/lib/node_modules"`
	`config_file": "/Applications/MAMP/htdocs/taxi-mate/eslint.config.mjs"` ← このプロジェクト独自の設定？

### サーバー構造
・以前は「App Engine」を利用していたがデプロイの設定がうまくいかずより簡単な「Heroku」を利用
・Herokuのデプロイアプリ環境？としてはPHPとNode.jsのアプリケーションとなっている
・PHPアプリケーションである理由 → ファイル構造自体がPHPアプリケーションで作られているため（composer.jsonに環境関連を記載）
・Node.jsアプリケーションである理由 → サイト速度を上げるためにデプロイ時にgulpでファイルを圧縮しているがその際にNode.jsを利用するため（package.jsonに環境関連を記載）

### gulpについて
・開発環境では `$ gulp` をコマンドから実行するとcss/jsがリアルタイムで圧縮されるようになっている
・git pushする際に `npm run build` で圧縮されるようにもなっている

### デプロイ関連について
・githubをheroku自体に接続しており、gitにプッシュされたらherokuアプリケーションにデプロイされるような構造になっている（heroku管理画面から設定。.gitignoreでアップロードしないファイルを決めている）
・開発環境で実行した場合はwatchして、本番環境でデプロイする時には圧縮を実行するようにしている。package.jsonのscriptはその記載をしているので注意すること。本番用にwatchを上げてしまうと無限にサーバーが監視をしてタイムアウトエラーしてしまいサーバーが落ちる。

### 設定している開発環境
・デプロイ時にPHPアプリケーションとして実行され（composer.json）、その次にNode.jsアプリケーションとして実行されている模様（package.json）

