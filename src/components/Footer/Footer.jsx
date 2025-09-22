import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
           <img src={assets.logo} alt=""/>
           <p>my name is Umesh Gupta .currently i am pursing a btech in computer science and engiinnering at jain  university.i am a passionate about learing a new things</p>
        </div>
        <div className='footer-content-center'>

        </div>
        <div className='footer-content-right'>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
