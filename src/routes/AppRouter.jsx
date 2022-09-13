import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Layouts/Header';

import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
