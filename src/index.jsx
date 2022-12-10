import React from "react";
import ReactDOM from "react-dom/client";
import RestClientApp from "./main/RestClientApp";

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RestClientApp />
  </React.StrictMode>
);
