import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import GradeBar from './components/GradeBar';

let sample_day = ['일', '월', '화', '수', '목', '금', '토'];

function App() {
  const [days, setDays] = useState([]);
  // const [scores, setScores] = useState([1,2,3,4,5]);
  const scores = useRef([]);

  // 요일 구하기
  useEffect(()=> {
    const dateobj = new Date();
    let today = dateobj.getDay();
    let new_day = [];
    for(let i = 0; i < sample_day.length; i++) {
      new_day.push(sample_day[today++ % 7]);
    }
    setDays(new_day);
    
  }, []);

  // 스코어 리렌더링 될 때마다
  // 랜덤으로 부여하기
  // useEffect(()=> {
  //   let new_score_array = [];
  //   let new_score_index ;
  //   for(let i = 0; i < days.length; i++) {
  //     new_score_index = Math.floor(Math.random() * 5);
  //     new_score_array.push(sample_score[new_score_index]);
  //   }
  //   setScores(new_score_array);
  //   console.log(new_score_array)
  // }, [])

  useEffect(() => {
    let new_score_array = [];
    let new_score = 0;
    for(let i = 0; i < days.length; i++) {
      new_score = Math.floor(Math.random() * 5) + 1
      new_score_array.push(new_score);
    }
    scores.current = [...new_score_array];
  })

  return (
    <div className="App">
      <Container>
        <WeeklyAppContainer>
          <GradeBar days={days} scores={scores.current}/>
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
