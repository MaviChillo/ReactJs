import React from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';
import {CartContext, UseCartContext} from '../context/CartContext';


const ItemDetail = ({product}) => {

  const [compra, setCompra] = useState(false)
  const { addToCart } = UseCartContext(CartContext)

  // const [goToCart, setGoToCart] = useState(false);
  // const { addProduct } = UseCartContext();

  const onAdd = (cantidad) => {
    setCompra(true)
    addToCart(product, cantidad)
  }

  console.log('miproducto: ', product)

  return (

      <div className='div-prod-child-detallado'>

          <strong>{product.nombre}</strong>
          <br></br>
          <br></br>
          <img alt="" className='img-prod-detallado' src={product.img}></img>
          <br></br>
          <br></br>
          {product.descripcion}
          <br></br>
          <br></br>
          ${product.precio}
          <br></br>
          <br></br>
          Stock: {product.stock}
          <br></br>
          <br></br>
          {compra ? (
            <Link id='ver-prod' to="/cart">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          )}

      </div>

  )
}

export default ItemDetail