import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StylesProvider } from '@material-ui/core/styles';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </React.StrictMode>
);
