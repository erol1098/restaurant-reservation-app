import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

import Home from '../pages/Home';
import Reservation from '../pages/Reservation';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='reservation' element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
