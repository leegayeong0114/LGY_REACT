import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import OneToFiftyTest from "./pages/game/OneToFifty";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />} />
      <Route path="/mini-game"  element={<OneToFiftyTest />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
