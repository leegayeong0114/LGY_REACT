import React from "react";
import styled from "styled-components";

// Clock 컴포넌트는 시간을 state에 저장하기 위해 클래스형 컴포넌트로 선언해줍니다.
class Clock extends React.Component {
  state = {
    date: new Date()
  }
  render() {
    const {date} = this.state
    return (
      <Container>
        <CurDate>
          {date.getFullYear()}&nbsp;/&nbsp;
          {date.getMonth() + 1}&nbsp;/&nbsp;
          {date.getDate()}
        </CurDate>
        <CurDay>
          {date.getDay() === 0
            ? "Sunday"
            : date.getDay() === 1
            ? "Monday"
            : date.getDay() === 2
            ? "Tuesday"
            : date.getDay() === 3
            ? "wednesday"
            : date.getDay() === 4
            ? "Thursday"
            : date.getDay() === 5
            ? "Friday"
            : "Saturday"}
        </CurDay>
        <CurTime>
          {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
        </CurTime>
      </Container>
    )
  }

  getDate = () => {
    this.setState({
      date: new Date()
    })
  }

  /* 
    - componentDidMount
    컴포넌트의 실행흐름에 따라 자동으로 실행되는 Life cycle method
    컴포넌트가 화면에 전부 그려졌을 때 실행
  */ 
  componentDidMount() {
    this.oneMinuteCall = setInterval(() => this.getDate(), 60000);
  }

  /*
    - componentWillUnmount
    Life Cycle method
    화면에 그려진 컴포넌트가 사라지기 직전에 호출
  */
  componentWillUnmount() {
    clearInterval(this.oneMinuteCall);
  }

}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;

export default Clock;