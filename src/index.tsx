import * as React from "react";
import {render} from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Editor } from './pages/editor';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const Globalstyle = createGlobalStyle`
  body * { 
    box-sizing: border-box;
    }
`

const Main = (
<>
  <Globalstyle/>
  {/*<Editor/>*/}
  <Router>
    <Route exact path="/editor">
      <Editor/>
    </Route>
    <Route exact path="/history">
      <h1>history</h1>
    </Route>
    <Route exact path="/neko">
      <h1>neko</h1>
    </Route>
    <Redirect to="/editor" path="*" />
  </Router>
</>)
render(Main,document.getElementById("app"))

// スタイル付きのコンポーネントを作成
// const Header = styled.h1`
// color: red;
// `
// 文字を埋め込む
// const Main = (<Header>neko</Header>)