import React from 'react';
import styled from 'styled-components';



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


    return(
        <GradeBarList>
           
            <div className='day-area'>{data.day}</div>
            <div className='scorebox-area'>
                {/* 아까 그거 넣기 */}
                ⭐⭐⭐⭐⭐
            </div>
            <div className='actions-area'></div>
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
        background:yellow;
        width:10%;
        height:100%;
    }
    & > .scorebox-area {
        display:flex;
        justify-content:center;
        align-items:center;
        background:green;
        width:70%;
        height:100%;
    }
    & > .actions-area {
        display:flex;
        justify-content:center;
        align-items:center;
        background:blue;
        width:20%;
        height:100%;
    }
    
`

