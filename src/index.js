import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2.js';
import App from './App.js';
// eslint-disable-next-line no-unused-vars
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FilmsList/>
  </React.StrictMode>
);


