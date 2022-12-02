import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext, UseCartContext} from '../context/CartContext';


const CartFinalizar = () => {

  const { cart } = UseCartContext(CartContext)

  const { totalPrice } = UseCartContext(CartContext)

  return (
    <div>

      {cart.length <= 0 ? <div className='div-seguir'>
        <h4>El carrito esta vacio.</h4> 
        <Link id='ver-prod' to={'/'}>Seguir comprando</Link>
      </div> :

        <div className='div-cart-col'>

          {cart.map((product) => <div className='div-cart-finalizar' key={product.id}> 
          <h2 className='nombre-cart'>{product.nombre}</h2> 
          <img src={product.img} className='imagen-cart' alt=""  />
          <p className='precio-cart'>${product.precio * product.quantity}</p>  
          <p className='cantidad-cart'> Cantidad: {product.quantity}</p>
          
          </div>)}


          <br/>
          <br/>

          <div className='div-precio-total-final'>
          <h2 className='precioTotal'>Precio total ${totalPrice()}</h2>
          </div>

        </div>
        }

      </div>
  )
}

export default CartFinalizar