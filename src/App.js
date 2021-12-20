import React from "react";
import styled from "styled-components";
import Content from "./routes/Content";
import Header from './components/layout/Header';

class App extends React.Component{
  state = {
    query: ""
  };
  render(){
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Container query = {this.state.query}>
            <SelectTheme 
              placeholder = "테마를 입력해보세요!"
              onKeyPress = {this.handleInputKeyPress}
              ></SelectTheme>
            <Content></Content>
          </Container>
        </div>
      </div>
    );
  }

  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      if(event.target.value) {
        // state에 저장하는 코드
        this.setState({
          query: event.target.value
        })
        event.target.value = "";
        /* state 변경 시 
        this.state.query = event.target.value ( X )  
        -> react가 변화 감지 못 한다
        항상 this.setState를 사용 할 것
        */
      }
    }
  }
}

const Container = styled.div`
  position: absolute;
  /* top: 0; test*/
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: 
    linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query}
    );
    @media (max-width: 768px) {
    background: 
    url(https://source.unsplash.com/random/768x1024?${props => props.query}
    );    
  }
    @media all and (max-width:480px) { 
    background: 
    url(https://source.unsplash.com/random/480x960?${props => props.query}
    );
  }

`;

const SelectTheme = styled.input`
  position: absolute;
  top: 5px;
  right: 0;
  width: 225px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

export default App;
