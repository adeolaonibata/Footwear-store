import React, { createContext, useState } from 'react'
import Cart from '../../pages/cart/cart';
import { PRODUCT } from '../Product';


const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCT.length + 1; i++) {
      cart[i] = 0;
  }
  return cart;
}
   
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(items));
        totalAmount += cartItems[items] * itemInfo.price
      }
        
      }


      return totalAmount;
    }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };
  
    const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }; 

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))  
  }

  const contextValue = {
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount,
    getTotalCartAmount
  }
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContext
