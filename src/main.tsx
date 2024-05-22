import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { LocaleProvider } from '@/contexts/locale.tsx';
import '@/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>
);
