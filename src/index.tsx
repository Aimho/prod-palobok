import "core-js/es/map";
import "core-js/es/set";

import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  ${normalize}

  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  b { font-weight: bold; }
  strong { font-weight: 500; }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B41118",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
