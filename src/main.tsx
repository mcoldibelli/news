import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { NewsProvider } from './context/NewsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <Routes>
          <Route path="/" element={ <App /> } />
        </Routes>
      </NewsProvider>
    </BrowserRouter>
    ,
  </StrictMode>,
);
