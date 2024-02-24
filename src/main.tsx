import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { NewsProvider } from './context/NewsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </StrictMode>,
);
