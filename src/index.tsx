import * as React from "react";
import {render} from "react-dom";
import styled from "styled-components";

// スタイル付きのコンポーネントを作成
const Header = styled.h1`
color: red;
`
// 文字を埋め込む
const Main = (<Header>neko</Header>)

render(Main,document.getElementById("app"))