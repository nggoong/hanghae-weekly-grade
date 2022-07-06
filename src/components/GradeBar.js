import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Average from './Average';

let sample_day = ['일', '월', '화', '수', '목', '금', '토'];

const GradeBar = () => {
    const [datas, setDatas] = useState([]);

    const [average, setAverage] = useState(() => {
      let sum = datas.reduce((a, b) => a + b.score, 0);
      return String(sum / 7).split('').splice(0, 3).join('');
    });
  
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
  
  
    useEffect(() => {
      let sum = datas.reduce((a, b) => { return a + b.score}, 0);
      setAverage(String(sum / 7).split('').splice(0, 3).join(''))
    }, [datas])

    return(
        <>
        <GradeBarListWrapper>
            {datas.map((data, index) => <GradeBarItem data={data} key={index}/>)}
        </GradeBarListWrapper>

        <Average average={average}/>
        
          
        <GradeBarButtonWrapper>
            <button onClick={()=> setAverage('0')}>RESET</button>
        </GradeBarButtonWrapper>
        </>
    )
}

const GradeBarListWrapper = styled.div`
    width:100%;
    height:75%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    margin:auto 0;
    
`

const GradeBarButtonWrapper = styled.div`
    position:absolute;
    left:0;
    bottom:0;
    height:10%;
    width:100%;
    display:flex;
    justify-content:center;


    & > button {
        width:30%;
        height:70%;
        background:#333D79;
        border-radius:10px;
        border:none;
        color:#FAEBEF;
        font-size:120%;
        font-weight:bold;
        cursor:pointer;
    }
`

export default GradeBar;

const GradeBarItem = ({ data }) => {

    let navigate = useNavigate();
    

    return(
        <GradeBarList>
           
            <div className='day-area'>{data.day}</div>
            <div className='scorebox-area'>
            {[...Array(5)].map((n, index)=> {
                return(
                    <ScoreBoxDiv key={index} strike={index + 1 <= data.score? true : false}/>
                )
            })}
            </div>
            <div className='actions-area' onClick={()=>navigate(`/detail/${data.day}`)}>
                <p>▶</p>
            </div>
        </GradeBarList>       
    )
}


const GradeBarList = styled.div`
    display:flex;
    width:100%;
    height:calc(100% / 8);
    /* height: */
    border:3px solid #333D79;
    box-sizing:border-box;
    
    border-radius:10px;
    cursor:pointer;

    & > .day-area {
        display:flex;
        justify-content:center;
        align-items:center;
        /* background:yellow; */
        width:10%;
        height:100%;
        color:#333D79;
        font-weight:bold;
    }
    & > .scorebox-area {
        display:flex;
        justify-content:space-around;
        align-items:center;
        /* background:green; */
        box-sizing:border-box;
        padding:0 20px;
        width:70%;
        height:100%;
        border-right:1px solid black;
        border-left: 1px solid black;
    }
    & > .actions-area {
        display:flex;
        justify-content:center;
        align-items:center;
        /* background:blue; */
        font-size:20px;
        width:20%;
        height:100%;
        color:#333D79;
    }
    
`
export const ScoreBoxDiv = styled.div`
    background:${props=> props.strike? '#333D79':'pink'};
    height:60%;
    width:10%;
    border:1px solid black;
    border-radius:10px;
    
`