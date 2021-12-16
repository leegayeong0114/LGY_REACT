import React from "react";
import styled from "styled-components";
import {IoMdRemoveCircleOutline} from 'react-icons/io'

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
        <Text>
        <IoMdRemoveCircleOutline  
          size="25"
          onClick = {() => handleClickRemove(index)}
          >
          </IoMdRemoveCircleOutline>
          {" "}{todo}
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
  /* display: inline; */
  margin-left: 10px;
  vertical-align: sub;
  /* cursor: pointer; */
  font-size: 22px;
  /* &:hover {
    opacity: 0.4;
  } */
`;

export default TodoRow;