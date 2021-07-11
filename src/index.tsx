import React from "react";
import App from "./containers/App/App";
import ReactDOM from "react-dom";
import { GlobalStyled } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
