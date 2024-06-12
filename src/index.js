import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';



const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
