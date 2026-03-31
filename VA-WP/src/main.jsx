import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"; // estilos Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; // íconos
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS de Bootstrap

import "./index.css"; // tus estilos personalizados

import App from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
