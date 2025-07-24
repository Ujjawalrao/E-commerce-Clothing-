import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // �� import this
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter> {/* 👈 wrap App in this */}
      <App />
    </BrowserRouter>
  
);
