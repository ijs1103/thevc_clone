import { StrictMode } from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./GlobalStyle";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </StrictMode>,
  rootElement
);
