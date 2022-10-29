import * as React from "react";
import {render} from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Editor } from './pages/editor';

const Globalstyle = createGlobalStyle`
  body * { 
    box-sizing: border-box;
    }
`

const Main = (
<>
  <Globalstyle/>
  <Editor/>
</>)
render(Main,document.getElementById("app"))

// スタイル付きのコンポーネントを作成
// const Header = styled.h1`
// color: red;
// `
// 文字を埋め込む
// const Main = (<Header>neko</Header>)