import React, { useState , useEffect} from "react";
import Food from '../components/food/Food';
import Header from '../components/layout/Header';

function FoodAxios () {
  return (
    <div>
      <Header></Header>
      <Food></Food>
    </div>
  );

}
export default FoodAxios;