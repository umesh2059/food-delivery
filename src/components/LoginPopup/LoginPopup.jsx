import React,{useState} from 'react'
import'./LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState]= useState('Sign Up');
  return (
    <div className='login-Popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt=""/>
        </div>
        <div className='login-popup-inputs'>
          <input type="text" placeholder='your name' required/>
          <input type='email' placeholder='your Email' required/>
          <input type='password' placeholder='your password' required/> 

        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
      </form>
    </div>
  )
}

export default LoginPopup
