import React, { useContext } from 'react'
import ShopContext from '../../src/context/shop-context'

const Product = (props) => {
    const{id, productName, price, productImage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <div className="product">
        <img src={productImage} alt="" width="100%" height= "100%" />
        <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
    </div>
  )
}

export default Product
