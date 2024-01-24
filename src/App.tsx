import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Routes as RoutesLink } from './constants/routes'
import './App.css';
import { Dashboard, Chess } from './Pages';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path={RoutesLink.dashboard} element={<Dashboard />} />
        <Route path={RoutesLink.chess} element={<Chess/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
