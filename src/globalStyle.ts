import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  &:focus {
    outline: 0px;
  }

  &.text {
    background-color: transparent;
    border: 0px;
    padding: 0px;

    &:hover {
      font-weight: bold;
    }
  }
}

a {
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
}

h1, h2, h3, h4, h5, h6, p, span {
  margin: 0px;
}

b { font-weight: bold; }
strong { font-weight: 500; }

body {
  min-width: 1280px;
  @media screen and (max-width: 768px ) {
    min-width: auto;
  }
}

.mask {
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
  }
}
`;

export default GlobalStyle;
