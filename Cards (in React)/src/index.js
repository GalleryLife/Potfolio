import React from 'react'
import ReactDOM from 'react-dom/client';
import App from '../src/Views/components/app/App.jsx'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
