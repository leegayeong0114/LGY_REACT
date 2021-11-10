import React from "react";
import styled from "styled-components";

const TodoRow = ({ todo, index, handleClickRemove }) => {
  console.log(`${todo} 컴포넌트 렌더링`);
  return (
    <Container>
      <Text
        onClick = {() => handleClickRemove(index)}
        >
        [{index + 1}] {todo}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  margin: 13px 0;
  width: 80%;
  text-align: left;
`;

const Text = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 32px;
  &:hover {
    opacity: 0.4;
  }
`;

export default TodoRow;