import React from "react";
import "./assets/styles.css";
import ReactDOM from "react-dom";
import Page from "./pages";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
