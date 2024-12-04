import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

// Obtén el elemento donde montarás la app
const rootElement = document.getElementById('root');

// Usa createRoot para renderizar la aplicación
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);