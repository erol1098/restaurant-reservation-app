import React from 'react';

import AppRouter from './routes/AppRouter';
import './App.scss';
import { AppContextProvider } from './context/app-context';

const App = () => {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
};

export default App;
