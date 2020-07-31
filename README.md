# Short Play Spotify


<img height=300 width=500 src='public/shot.png'>

<br>

## ABOUT 

<br>
アーティストを検索してそのアーティストのshortバージョンの曲が聴けます。さらに気に入ったアーティストをお気に入り登録が出来ます。(基本的なスマートフォンのサイズはレスポンシブ対応済。ipadのサイズはまだしていません。)

<br>

## Area of responsibility

<br>
OAuthの仕組みを勉強したかったのでSportifyのAPIを利用したフルスタックなアプリを一人で作成しました。作成期間は合計時間で約四日程です。
  ・フロントはReactを基本に、grobal stateの管理にReact-redux。更にReact-router-domとstyled-componentを2日で学びこのプロジェクトの組み込んでみました。
  ・バックエンドではPostgresにユーザー情報とお気に入りのアーティストの情報を保存しています。
  ・今後は適切なコンポーネント設計を意識したリファクタリング
<br>

## Tech Stack

<br>
フロントエンド  React.js,React-redux, React-router-dom, material-ui redux-thunk, styled-component
<br>
バックエンド  Express.js, Knex.js, Postgres, Heroku
<br>
 API  Spotify API, Spotify SDK
