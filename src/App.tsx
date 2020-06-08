/**
 * 참고
 * React.StrictMode https://ko.reactjs.org/docs/strict-mode.html
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./component/Header";
import PageContainer from "./page";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <React.StrictMode>
        <PageContainer />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
