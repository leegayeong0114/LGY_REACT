import React from "react";
import CFood from '../components/food/Food';
import Header from '../components/layout/Header';

function Food({name, rating, img}) {
  return (
    <div>
      <Header></Header>
      {foodLike.map(dish => (
        <CFood name={dish.name} rating={dish.rating} img={dish.image}></CFood>
      ))}
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.pixabay.com/photo/2016/04/05/09/17/pork-1308988_960_720.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://cdn.pixabay.com/photo/2020/02/28/12/40/bibimbap-4887394_960_720.jpg',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://cdn.pixabay.com/photo/2018/03/06/09/02/food-3202918_960_720.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864_960_720.jpg',
    rating: 4.7,
  },
];

export default Food;