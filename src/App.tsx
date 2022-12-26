import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Main, NotFound } from './pages/index';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
