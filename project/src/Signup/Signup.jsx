import React, { useState } from 'react'
import  '../App.css'
const Signup = ({clickfunc}) => {

const [display,setdisplay]=useState('')
  const [one,setOne]=useState('');
  const [second,setSecond]=useState('');
  
  const [third,setThird]=useState('');
  const [fourth,setFourth]=useState('');


  const name =(e)=>{
setOne(e.target.value)
  }

  const email =(e)=>{
setTwo(e.target.value)
  }

  const password =(e)=>{
setTwo(e.target.value)
  }
  const repassword =(e)=>{
setTwo(e.target.value)
  }


  const btn=()=>{
    setdisplay(one)
    setdisplay(two)
    setdisplay(third)
    setdisplay(fourth)
    setOne('')
    setSecond('')
    setThird('')
    setFourth('')

  }









  return (
    <>
      <div className="container   center-div w-50 p-3  mx-auto bg-info bg-opacity-0 border border-info border-start-0  rounded-end ">
      <h1 className='text-center'>Signup</h1>
    <form>
<div className="form-row offset-md-3 w-50 p ">
    <div className="form-group  ">
      <label  className='text-center'>Name</label>
      <input
        type="text" onChange={name}
        className="form-control mt-2"
            placeholder="Name"
      />
    </div>

    <div className="form-group mt-4 ">
      <label >Email</label>
      <input
        type="email" onChange={email} 
        className="form-control mt-2"
      
        placeholder="Email"
        
      />
    </div>
  
    <div className="form-group mt-4">
      <label >Password</label>
      <input
      
        type="password" onChange={password}
        className="form-control mt-2"
       
        placeholder="Password"
      />


<div className="form-group  mt-4">
      <label >Confirm-Password</label>
      <input
        type="password" onChange={repassword}
        
        className="form-control mt-2"
      
        placeholder="confirm-Password"
      />
    </div>
    </div>

    <div className='text-center'>
  <button type="button" className="btn btn-secondary mt-4 m-auto w-50 p btn-lg"> <input className='btn btn-secondary' onClick={btn} type="submit"/></button>
<p className='mt-2'>Alreday have an account? <a href="#"   onClick={clickfunc} >  Login</a> </p>
</div>
  </div>



{
  display===''? null :
  <>


  <div className='bg-warning bg-opacity-0 border border-info'>
    <h1>YourForm Has been submit</h1>
     <h1>OUTPUT:</h1>
  <h1>NAME: {display}</h1>
  <h1>EMAIL: {display}</h1>
  <h1>PASWORD: {display}</h1>
  <h1>RE-PASSWORD: {display}</h1>
  </div>
 
  </>
}
</form>   
  </div>

    </>
  )
}

export default Signup
