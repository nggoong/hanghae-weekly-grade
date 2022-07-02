import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GradeBar from './components/GradeBar';
import {Routes, Route} from 'react-router-dom';
import Detail from './components/Detail';

let sample_day = ['일', '월', '화', '수', '목', '금', '토'];

const App = () => {
  const [datas, setDatas] = useState([]);
  
  const [average, setAverage] = useState(() => {
    let sum = datas.reduce((a, b) => a + b.score, 0);
    return String(sum / 7).split('').splice(0, 3).join('');
  }); //함수형 초기화 ?

  const getDayScore = () => {
    // 오늘 무슨 요일인지 받아오기
    const dateobj = new Date();
    let today = dateobj.getDay();
    let day_and_score = []; // {day:요일, score:점수}를 담는 배열
    for(let i = 0; i < sample_day.length; i++) {
      let new_score = Math.floor(Math.random() * 5) + 1; // 반복 시 계속 난수를 불러옴
      
      day_and_score.push({day:sample_day[today++ % 7], score: new_score});
    }
    setDatas(day_and_score);
  }

  // 요일
  useEffect(()=> {
    getDayScore();
  }, []);

  useEffect(() => {
    let sum = datas.reduce((a, b) => { return a + b.score}, 0);
    setAverage(String(sum / 7).split('').splice(0, 3).join(''))
  }, [datas])


  return (
    <div className="App">
      <Container>
        <WeeklyAppContainer>
          <Routes>
          <Route path="/" element={<GradeBar datas={datas} average={average} setAverage={setAverage}/>}/>
          <Route path="/detail/:day" element={<Detail getDayScore={getDayScore}/>}>
          </Route>
          </Routes>
          
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
