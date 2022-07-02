import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import GradeBar from './components/GradeBar';

let sample_day = ['일', '월', '화', '수', '목', '금', '토'];

function App() {
  const [datas, setDatas] = useState([]);

  // 요일
  useEffect(()=> {
    // 오늘 무슨 요일인지 받아오기
    const dateobj = new Date();
    let today = dateobj.getDay();
    let day_and_score = []; // {day:요일, score:점수}를 담는 배열
    for(let i = 0; i < sample_day.length; i++) {
      let new_score = Math.floor(Math.random() * 5) + 1; // 반복 시 계속 난수를 불러옴
      
      day_and_score.push({day:sample_day[today++ % 7], score: new_score});
    }
    setDatas(day_and_score);
  }, []);


  return (
    <div className="App">
      <Container>
        <WeeklyAppContainer>
          <GradeBar datas={datas}/>
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
