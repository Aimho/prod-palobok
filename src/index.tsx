import "core-js/es/map";
import "core-js/es/set";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import App from "./App";
import locale from "./locale";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  ${normalize}

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const { store, persistor } = configureStore();

ReactDOM.render(
  <IntlProvider locale="ko" messages={locale.ko}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
