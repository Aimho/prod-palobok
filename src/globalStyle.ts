import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

button {
  border: 0px;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: 0px;
  }

  &.text {
    background-color: transparent;
    border: 0px;
    padding: 0px;
    &:hover {
      text-decoration: underline;
    }
  }
}

a {
  color: #000;
  display: block;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #b41118;
  }
  &.market {
    display: inline-flex;
    align-items: center;
    color: #b41118;
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

.full-width {
  width: 100%;
}

.visible-desktop {
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.visible-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.highlight {
  color: #b41118;
}
`;

export default GlobalStyle;
