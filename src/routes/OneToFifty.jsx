import React, { useState } from "react";
import styled from "styled-components";
import Board from "../components/game/Board";
import Timer from "../components/game/Timer";
import Header from '../components/layout/Header';

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function OneToFifty() {
  // 1 ~ 25 숫자 배열
  const [numbers, setNumbers] = useState(array);
  // 게임 진행 여부
  const [gameFlag, setGameFlag] = useState(false);
  // 게임 진행 중 특정시점에서 클릭해야 할 숫자
  const [current, setCurrent] = useState(1);
  // 경과시간
  const [timeElapsed, setTimeElapsed] = useState(0);  

  const handleClick = num => {
    console.log(num);
    if (num === current) {
      if (num === 50) {
        console.log("게임 끝")
        endGame();
      }

      const index = numbers.indexOf(num);
      setNumbers(numbers => [
        ...numbers.slice(0, index),
        num < 26 ? num + 25 : 0,
        ...numbers.slice(index + 1)
      ]);
      setCurrent(current => current + 1);
    }
  }

  const startGame = () => {
    setNumbers(shuffleArray(array));
    setCurrent(1);
    setGameFlag(true);
  };

  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <div>
      <Header></Header>
      <Container className="container">
      <h2>1 TO 50</h2>
        <Board numbers = {numbers} handleClick = {handleClick}></Board>
        {gameFlag ? (<Timer/>) : (<StartButton className="btn btn-warning" onClick = {startGame}>start</StartButton>)}
      </Container>
    </div>
  );
}

const shuffleArray = array => {
  for(let i = array.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Container = styled.div`
  width: 90%;
  height: 90%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 50px;
`;

export default OneToFifty;