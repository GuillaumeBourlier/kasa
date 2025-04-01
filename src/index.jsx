import React from 'react';
import ReactDOM from 'react-dom/client';  // Note l'importation de 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Création de la racine
root.render(  // Utilisation de `root.render` à la place de `ReactDOM.render`
  <BrowserRouter>
    <App />
  </BrowserRouter>
);