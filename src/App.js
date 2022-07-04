import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GradeBar from './components/GradeBar';
import {Routes, Route} from 'react-router-dom';
import Detail from './components/Detail';



const App = () => {

  return (
    <div className="App">
      <Container>
        <WeeklyAppContainer>
          <Routes>
          <Route path="/" element={<GradeBar/>}/>
          <Route path="/detail/:day" element={<Detail/>}>
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
