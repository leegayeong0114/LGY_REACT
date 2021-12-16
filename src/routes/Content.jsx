import React from "react";
import styled from "styled-components";
import Clock from "../components/todo/Clock";
import Todo from "../components/todo/Todo";

const Content = () => {
  return (
    <Container>
      <Clock></Clock>
      <Todo></Todo>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: white;
  overflow-y: auto; // 자동 스크롤 추가
  @media (max-width: 768px) { // 반응형
    width: 100%;
  }
`;

export default Content;