import React from 'react';
import styled from 'styled-components';

const Average = ({ average }) => {


    return (
        <>
        <AverageArea>
            <p>평균 평점 : {average}</p>
        </AverageArea>
        </>
    )
}


const AverageArea = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    & > p {
        color:#333D79;
        font-size:20px;
        font-weight:bold;
    }
`
export default Average;