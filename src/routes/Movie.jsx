import React from 'react';
import Movies from '../components/movie/Movies';
import Header from '../components/layout/Header';
import '../css/home.css';

function Home() {
  return (
    <div>
      <Header></Header>
      <Movies></Movies>
    </div>
  ); 
}

export default Home;