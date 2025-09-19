import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

  const StoreContextProvider =(props)=>{

   const[cartItems,setCartItem]=useState({});

      const addToCart = (cartId)=>{
        if(!cartItems[itemId]){
          setCartItem((prev)=>({...prev,[itemId]:1}))
        }
      }
    



   const contextValue={
        food_list
   }
   return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
   )
  }

  export default StoreContextProvider;