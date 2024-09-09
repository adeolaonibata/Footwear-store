import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"



export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="links">
                <Link to="/"><p className='navbarShop'>shop</p></Link>
                <Link to="/cart "><p className='navbarCart'>cart</p></Link>
            </div>
        </div>
    )
}