import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "../style.css"
import CartLogo from './img/cart2.png'
import { Link } from 'react-router-dom';



const CartWidget = () => {

  const { cart } = useContext(CartContext)

    return (
  
      <div id='cartLogoDiv'>
        
        <Link className='cart-link' to='/cart'><img src={CartLogo} alt='foto logo carrito' className='logo-cart' /> </Link>
        <p className='cart-number'>{cart.reduce((accum, item) => accum + item.quantity, 0)}</p>
        
        {/* {/* <img src={CartLogo} alt=""></img>} */}
      </div>
    );
  }
  
  export default CartWidget;