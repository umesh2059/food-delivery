import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './foodDisplay.css';

const foodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
    <div className='food-display'  id='food-display'>
        <h2>Top dishes near you </h2>
      
    </div>
  )
}

export default foodDisplay;
