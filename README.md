# 環境構築方

```
# プロジェクトにwebpackの導入
npm install webpack@5 webpack-cli@4
# tsの導入
npm i typescript@4
# webpack でビルドする際に TypeScript のビルドも同時に行うためのもの  
npm i ts-loader@9

# react17をインストール 最初は17でok
npm i react@17 react-dom@17 @types/react@17 @types/react-dom@17

# これを入れる事で、リアルタイムで編集が反映される
npm i webpack-dev-server@3

# reactのcss管理
npm i styled-components@5 @types/styled-components@5
```

# 参考

最新版TypeScript+webpack 5の
環境構築まとめ
(React, Vue.js, Three.jsのサンプル付き)  
https://ics.media/entry/16329/

# 感想

vueみたいに普通にコンポーネントをを作って作成すれば良いだけ  
styled-componentsの補完がめんどくさかった  
vscode 補完 styled-components 補完  とかで調べたら解決した  
