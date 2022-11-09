import React from 'react'
import { getProduct } from "../services/Products";

const ItemDetail = ({product}) => {

  console.log('miproducto: ', product)

  return (
    <div>

      <div className='div-prod-child-detallado'>

          <strong>{product.nombre}</strong>
          <br></br>
          <img alt="" className='img-prod-detallado' src={product.img}></img>
          <br></br>
          {product.descripcion}
          <br></br>
          <br></br>
          ${product.precio}
          <br></br>
          <br></br>
          Stock: {product.stock}

      </div>

    </div>
  )
}

export default ItemDetail