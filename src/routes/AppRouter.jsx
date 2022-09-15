import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import About from '../pages/About';
import Contact from '../pages/Contact';

import Home from '../pages/Home';
import Reservation from '../pages/Reservation';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='reservation' element={<Reservation />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
