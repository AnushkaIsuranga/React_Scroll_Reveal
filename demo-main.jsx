import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import App from './examples/app.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
