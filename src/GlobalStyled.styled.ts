import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MAX_WIDTH } from "constant/const";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-size: 14px;
    box-sizing: border-box;
  }

  body > * {
    max-width: ${MAX_WIDTH + "px"};
    margin: 0 auto;
  }
`;

export default GlobalStyle;
