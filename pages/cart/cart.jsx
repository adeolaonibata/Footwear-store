import React, { useContext } from 'react'
import { PRODUCT } from '../../src/Product'
import ShopContext from '../../src/context/shop-context'
import CartItems from './CartItems'
import "./cart.css"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)

  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
      <h1 >Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCT.map((product) => {
          if (cartItems[product.id] !==0) {
            return <CartItems data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ?
      <div className="checkout"> 
        <p className='subTotal'>Subtotal: ${totalAmount}</p>

        <div className="checkoutBttn">
        <button className='btn' onClick={() => navigate("/")}>Continue Shopping</button>
        <button className='btn'>Checkout</button>
        </div>
      </div>
      : <h2 className='cartEmpty'>Your cart is empty</h2>  }
    </div>

    
  )
}

export default Cart
  