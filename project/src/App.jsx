import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './App.module.css'
import  './App.css'
import ra from './assets/ra.jfif'
import Signup from './Signup/Signup';
import Login from './Login/Login';
const App = () => {


  const [condition,setCondition]=useState(true);
  const make=()=>{
setCondition(!condition);
  }

  const ans=()=>{
alert("Your Form has been submited")
  }
  return (
    <>
{

  condition ===true?
  <>
  
<Signup clickfunc={make} ans={ans}/>

  </>
  : 
  
  <Login clickfunc={make} ans={ans}/>




}


   
    



    </>
  )
}

export default App
