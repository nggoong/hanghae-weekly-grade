import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import ScoreBoxDiv from './GradeBar';

const Detail = ({ getDayScore }) => {
    const [focusBox, setFocusBox] = useState();
    let params = useParams();
    const navigate = useNavigate();
    
    return(
        <DetailContainer>
            <TitleArea>
                <h2><span>{params.day}요일</span> 평점 남기기</h2>
            </TitleArea>
            <ScoreBoxArea>
                {[...Array(5)].map((n, index)=> {
                    return (
                        <Boxes key={index} strike={index <= focusBox?true:false} onClick={()=>setFocusBox(index)}></Boxes>
                    )
                })}
            </ScoreBoxArea>
            <button onClick={()=> {getDayScore(); navigate('/');}}>평점 남기기</button>
        </DetailContainer>
    )
}

export default Detail;

const DetailContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;

    & > button {
        width:70%;
        height:8%;
        background:#333D79;
        color:#FAEBEF;
        cursor:pointer;
    }
`
const TitleArea = styled.div`
    width:70%;
    height:10%;
    display:flex;
    justify-content:center;
    

    & > h2 {
        margin:0;
        padding:0;
        margin:0 auto;
    }

    & > h2 > span {
        background:orange;
    }
`

const ScoreBoxArea = styled.div`
    width:70%;
    height:10%;
    display:flex;
    justify-content:space-between;
`

const Boxes = styled.div`
    background:${props=> props.strike? '#333D79':'pink'};
    height:60%;
    width:13%;
    border:1px solid black;
    border-radius:10px;
    cursor:pointer;
`