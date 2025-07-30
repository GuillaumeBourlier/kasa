// Utiliser StrictModepour activer des comportements de développement et des avertissements supplémentaires pour l'arborescence des composants à l'intérieur//
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter basename="/kasa">
      <App />
    </BrowserRouter>
  </StrictMode>
);
