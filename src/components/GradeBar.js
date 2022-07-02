import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';



const GradeBar = ({ datas }) => {


    return(
        <>
        <GradeBarListWrapper>
            {datas.map((data, index) => <GradeBarItem data={data} key={index}/>)}
        </GradeBarListWrapper>
        
        <GradeBarButtonWrapper>
            <button>RESET</button>
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
                    <>
                    <ScoreBoxDiv key={index} strike={index + 1 <= data.score? true : false}/>
                    </>
                )
            })}
            </div>
            <div className='actions-area' onClick={()=>navigate(`/detail/${data.day}`)}>
                <p>▶</p>
            </div>
        </GradeBarList>       
    )
}


// {[...Array(5)].map((n, index)=> {
//     return(
//         <>
//         {data.day} {index}
//         </>
//     )
// })}



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