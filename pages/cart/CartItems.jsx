import React from 'react'
import { useContext } from 'react'
import ShopContext from '../../src/context/shop-context'


const CartItems = (props) => {
    const { id, productName, price, productImage } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='cartItem'>
      <img src={productImage} alt=""  width="150px" height="160px"/>
      <div className="description">
        <p><b>{productName }</b></p>
        <p>${price}</p>
        <div className="counhandler">
            <button onClick={() => {removeFromCart(id)}} className='minus'> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
            <button onClick={() => {addToCart(id)}} className='plus'> +  </button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
 