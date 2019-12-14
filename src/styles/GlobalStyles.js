import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 2rem;
    box-sizing: border-box;
    color: #333;
  }
`;

export default GlobalStyle;
