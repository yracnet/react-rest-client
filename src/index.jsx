import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AppRouter, AppRouterProvider } from "./app";

const root = document.querySelector("#root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>
);

// ReactDOM.createRoot(root).render(
//   <RestClientApp />
// );
