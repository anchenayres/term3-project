import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './login.css';
import './individual.css';
import './individual.css';
import './cart.css';
import './checkout.css';



import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </ BrowserRouter>
);

