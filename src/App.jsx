import React,{useState} from 'react'; 

import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import placeOrder from './pages/placeOrder/placeOrder';
import cart from './pages/cart/cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [ShowLogin,setShowLogin]=useState(false);
  return (
    <>
    {ShowLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/placeOrder' element={<placeOrder/>}/>
       </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App;
