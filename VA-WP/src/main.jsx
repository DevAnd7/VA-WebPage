import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa los estilos de Bootstrap Icons

import 'bootstrap/dist/css/bootstrap.min.css'//importamos el JS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'//importamos los estilos personalizados

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
