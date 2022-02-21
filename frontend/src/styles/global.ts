import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  body {
    background-color: #F2F2FA;
  }
`;
