import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { Link } from 'react-router-dom';

// 입력받은 할 일은 저장하기위해 state을 사용하므로 클래스형 컴포넌트로 선언
class Todo extends React.Component {
  state = {
    todoList: [] // 여러개 저장하기 위해 배열로 선언
  }
  render() {
    return (
      <Container>
        <Input
          placeholder = "오늘 할 일"
          onKeyPress = {this.handleInputKeyPress}
        ></Input>
        <TodoList
          todoList = {this.state.todoList} //Todo 컴포넌트의 state을 TodoList 컴포넌트에 props로 전달
          handleClickRemove = {this.handleClickRemove}
        ></TodoList>
      </Container>
    );
  }

  handleInputKeyPress = event => {
    const {
      target: {value}
    } = event;
    if (event.key === "Enter") {
      if(event.target.value) {
      /* 
        - todoList state에 저장
        - ...구문 : spread operator
        - [...state.todoList, value]는 state.todoList에 있는 
          모든 요소를 복제 후 맨 뒤에 value값을 추가한 배열을 반환한다.
          => 기존의 할 일 리스트에 방금 입력한 할 일(value)을 추가하는 작업
        - localStorage에 todoList를 문자열로 저장
      */
      this.setState(
        state => ({ todoList: [...state.todoList, value]}),
        () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      )
      event.target.value = "";
      }
    }
  }

  /* 
    어플리케이션이 실행되어 화면에 컴포넌트가 그려지면 
    ComponentDidMount가 실행되므로 ComponentDidMount에서 localStorage에 저장된 값을 가져오면 된다.
  */
  componentDidMount() {
    this.setState({
      todoList: JSON.parse(localStorage.getItem("todoList")) || []
    })
  }

  /*
    - handleClickRemove
    todoList 삭제
  */
  handleClickRemove = index => {
     // eslint-disable-next-line no-restricted-globals
    if (confirm('목록에서 지우시겠습니까?')) {
      /*
      - slice() : 해당 배열의 부분배열을 추출하는데 사용
      slice(<시작 index>, <마지막 index>)
      두번째 인자를 생략하면 배열의 맨 끝 요소까지 추출하게됩니다.
      */
     this.setState(
       state => ({
         todoList: [
           ...state.todoList.slice(0, index),
           ...state.todoList.slice(index+1)
          ]
        }),
        // 할 일이 삭제된 상태의 state을 localStorage에도 저장
        () => localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
     );
    }
  }

}

const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default Todo;