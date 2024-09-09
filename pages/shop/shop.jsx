import React from 'react'
import { PRODUCT } from '../../src/Product'
import Product from './Product'
import "./shop.css"

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
             <h1>Adeolaonibata_ Footwear Store</h1>
        </div>
        <div className="products">{PRODUCT.map((product) => (
            <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop
