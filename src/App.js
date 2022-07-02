import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import GradeBar from './components/GradeBar';

let sample_day = ['일', '월', '화', '수', '목', '금', '토'];

function App() {
  const [days, setDays] = useState([]);

  // 요일 구하기
  useEffect(()=> {
    const dateobj = new Date();
    let today = dateobj.getDay();
    let new_day = [];
    for(let i = 0; i < sample_day.length; i++) {
      new_day.push(sample_day[today % 7]);
      today++;
    }
    console.log(new_day)
    setDays(new_day);
  }, []);


  return (
    <div className="App">
      <Container>
        <WeeklyAppContainer>
          <GradeBar days={days}/>
        </WeeklyAppContainer>
      </Container>
    </div>
  );
}


const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

const WeeklyAppContainer = styled.div`
  position:relative;
  width:30%;
  height:90%;
  border: 1px solid black;
  border-radius:20px;
  box-shadow: 10px 10px 5px gray;
  background:#FAEBEF;
  padding:30px;
  box-sizing:border-box;
`

export default App;
