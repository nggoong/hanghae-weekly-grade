import React from 'react';
import styled from 'styled-components';

const GradeBarItem = ({ data }) => {


    return(
        <GradeBarList>
            <div className='day-area'>{data.day},{data.score} </div>
            <div></div>
        </GradeBarList>       
    )
}

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

const GradeBarList = styled.div`
    width:100%;
    height:calc(100% / 8);
    /* height: */
    border:3px solid #333D79;
    box-sizing:border-box;
    
    border-radius:10px;
    cursor:pointer;
    
`

export default GradeBar