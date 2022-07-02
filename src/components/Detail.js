import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    let params = useParams();

    useEffect(()=> {
        console.log(params.day);
    })
    return(
        <>
        dfasdf
        </>
    )
}

export default Detail;