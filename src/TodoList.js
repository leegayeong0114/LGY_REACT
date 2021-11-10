import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";

// TodoList 컴포넌트는 단순히 todoList를 출력하는 기능만 담당하므로 함수형 컴포넌트로 작성
const TodoList = ({ todoList, handleClickRemove }) => (
  <Container>
    {todoList.map((todo, index) => ( 
      /*
        Array.map() 메소드를 사용하여 TodoRow 컴포넌트를 렌더링
        map() 함수는 todoList내의 모든 원소를 순차적으로 돌면서 TodoRow 컴포넌트를 반환
      */ 
      <TodoRow 
        todo = {todo} 
        key = {index} // key prop은 React에서 식별을 위해 사용할 뿐 우리들은 사용하지 못한다
        index = {index} // 그래서 index prop 추가함
        handleClickRemove = {handleClickRemove}
      ></TodoRow>
    ))}
  </Container>
  
)

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;