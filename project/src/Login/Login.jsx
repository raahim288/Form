import React, { useState } from 'react'
import '../App.css'

import styles from './Login.module.css'
const Login = ({ans}) => {

const [one,setOne]=useState('');
const [two,setTwo]=useState('')
const [display,setDisplay]=useState('');
const answerone=(e)=>{
  setOne(e.target.value)
}

const answerTWO=(e)=>{
  setTwo(e.target.value)
}


const getdata=()=>{
setDisplay(one)
setDisplay(two)
setOne('')
setTwo('')
} 
 return (
    <>


      <div className="container   center-div w-50 p-3  mx-auto bg-info bg-opacity-1 border  border-start-0  rounded-end ">
      <h1 className='text-center'>Login</h1>
    <form action='' > 
      
<div className="form-row offset-md-3 w-50 p ">
   

    <div className="form-group mt-4 ">
      <label >Email</label>
      <input
        type="email"  onChange={answerone} value={one}
        className="form-control mt-2"
     
        placeholder="Email" 
      />
    </div>
  
    <div className="form-group mt-4"> 
      <label >Password</label>
      <input
        type="password" onChange={answerTWO} value={two}
        className="form-control mt-2"
       
        placeholder="Password"
        
      />


    </div>
    <div className='text-center'>
  <button type="button"  className="btn btn-secondary  mt-4 m-auto w-50 p btn-lg"> <input  onClick={getdata} className='btn btn-secondary' id='a' type="submit"/></button>
  </div>
<p>Create an account? <a href="">Signup</a> </p>


  </div>
{
  display===''? 
null 
  
  :<>  

  <div className=' mx-auto bg-warning bg-opacity-1 border  border-start-0  rounded-end'>
  <h1>YourForm Has been submit</h1>
<h1>
  Output:
</h1>
  <h1>Email: {display}</h1>

  <h1>Password: {display}</h1>
  </div>
  </>

}
</form>   
  </div> 
    </>
  )
}

export default Login
