import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
  }

  #root {
    max-width: 400px;
    margin: 0 auto;
    height: 100%;
  }

  .App {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
