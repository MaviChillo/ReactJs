import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext, UseCartContext} from '../context/CartContext';


const Cart = () => {

  const { cart } = UseCartContext(CartContext)

  const { removeItem, totalPrice } = UseCartContext(CartContext)

  return (
    <div>
      <h3 id="welcome">Carrito</h3>
      

      {cart.length <= 0 ? <div className='div-seguir'>
        <h4>El carrito esta vacio.</h4> 
        <Link id='ver-prod' to={'/'}>Seguir comprando</Link>
      </div> :

        <div className='div-cart-col'>

          {cart.map((product) => <div className='div-cart' key={product.id}> 
          <h2 className='nombre-cart'>{product.nombre}</h2> 
          <img src={product.img} className='imagen-cart' alt=""  />
          <p className='precio-cart'>${product.precio * product.quantity}</p>  
          <p className='cantidad-cart'> Cantidad: {product.quantity}</p>
          
          <button id="button" className='eliminar-item' onClick={() => removeItem(product.id)}>X</button>
          </div>)}


          <br/>
          <br/>

          <div className='div-precio-total'>
          <h2 className='precioTotal'>Precio total ${totalPrice()}</h2>
          <Link to='finalizar-compra'><button className='button-terminar' id="button">Continuar</button></Link>
          </div>

        </div>
        }

      
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
  )
}

export default Cart