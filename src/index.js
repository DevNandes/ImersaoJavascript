import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import reportWebVitals from './reportWebVitals';

// Importando estilos CSS
import './styles/reset.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
