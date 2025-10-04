import React,{useState} from 'react'
import'./LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState]= useState('login');
  return (
    <div className='login-Popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt=""/>
        </div>
        <div className='login-popup-inputs'>
          {currState==="login"?<></>:<input type="text" placeholder='your name' required/>}
          <input type='email' placeholder='your email' required/>
          <input type='password' placeholder='your password' required/> 
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>BY continuing,i agree to the terms of use & privacy policy .</p>
        </div>
        {currState==="login" ?  <p>create a new account? <span onClick={()=>setCurrState("Sign up")}>click here </span></p> 
        :<p>Already have an account ? <span onClick={()=>setCurrState("login here")}>Login here </span></p>}
       
        
      </form>
    </div>
  )
}

export default LoginPopup
