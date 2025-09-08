import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import placeOrder from './pages/placeOrder/placeOrder';
import cart from './pages/cart/cart';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/placeOrder' element={<placeOrder/>}/>
       </Routes>
    </div>
  )
}

export default App;
