import React from "react";
import styled from "styled-components";
import LiveClock from "react-live-clock";

// Clock 컴포넌트는 시간을 state에 저장하기 위해 클래스형 컴포넌트로 선언해줍니다.
class Clock extends React.Component {
  // state = {
  //   date: new Date()
  // }
  render() {
    // const {date} = this.state
    return (
      <Container>
        <CurDate>
          <LiveClock format={'YYYY / MM / DD'} ticking={true} timezone={'asia/seoul'}></LiveClock>
        </CurDate>
        <CurTime>
          <LiveClock format={'HH:mm:ss'} ticking={true} timezone={'asia/seoul'}></LiveClock>
        </CurTime>
      </Container>
    )
  }

  // getDate = () => {
  //   this.setState({
  //     date: new Date()
  //   })
  // }

  /* 
    - componentDidMount
    컴포넌트의 실행흐름에 따라 자동으로 실행되는 Life cycle method
    컴포넌트가 화면에 전부 그려졌을 때 실행
  */ 
  // componentDidMount() {
  //   this.oneMinuteCall = setInterval(() => this.getDate(), 30000);
  // }

  /*
    - componentWillUnmount
    Life Cycle method
    화면에 그려진 컴포넌트가 사라지기 직전에 호출
  */
  // componentWillUnmount() {
  //   clearInterval(this.oneMinuteCall);
  // }

}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 30px;
`;

const CurTime = styled.div`
  font-size: 60px;
`;

export default Clock;