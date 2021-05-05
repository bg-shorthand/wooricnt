import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-size: 14px;
    box-sizing: border-box;
  }

  body > * {
    max-width: 700px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
