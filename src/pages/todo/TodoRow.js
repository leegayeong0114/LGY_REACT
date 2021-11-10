import React from "react";
import styled from "styled-components";

/*
  렌더링 최적화를 하기 위해 (Life Cycle method을 사용해야함)
  TodoRow 컴포넌트를 함수형 컴포넌트에서 클래스형 컴포넌트로 바꿔준다.
*/
class TodoRow extends React.Component {

  // 최적화
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.todo === nextProps.todo) {
      return false;
    }
    return true;
  }

  render() {
    const { index, todo, handleClickRemove } = this.props;
    console.log(`${todo} 컴포넌트 렌더링`);
    return (
      <Container>
        <RemoveBtn
          onClick = {() => handleClickRemove(index)}
          >X</RemoveBtn>
        <Text>
          {todo}
        </Text> 
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 13px 0;
  width: 80%;
  text-align: left;
`;

const Text = styled.div`
  display: inline;
  /* cursor: pointer; */
  font-size: 28px;
  /* &:hover {
    opacity: 0.4;
  } */
`;

const RemoveBtn = styled.button`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 10px;
  color: #bdbdbd;
  padding: 10px 15px;
  margin-right: 10px;
  vertical-align: bottom;
  :hover{
    background: #bdbdbd;
    color: #ffffff;
  }
`;

export default TodoRow;