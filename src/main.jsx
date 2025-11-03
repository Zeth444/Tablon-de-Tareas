// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Importa el Provider (de react-redux) y el store 
import { Provider } from 'react-redux';
import { store } from './redux/store.js'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envuelve componente <App /> con el <Provider /> */}
    {/* Hace que el store esté disponible para cualquier componente */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);