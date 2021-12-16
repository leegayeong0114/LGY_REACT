import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import OneToFiftyTest from "./routes/OneToFifty";
import Food from './routes/Food';
import Count from './routes/Count';
import Movie from './routes/Movie';
import About from './routes/About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App/>} />
      <Route path="/mini-game"  element={<OneToFiftyTest />}/>
      <Route path="/movie"  element={<Movie/>} />
      <Route path="/count"  element={<Count/>}/>
      <Route path="/food"  element={<Food/>}/>
      <Route path="/about"  element={<About/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
