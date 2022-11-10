import React from 'react'
import ItemCountContainer from './ItemCountContainer';

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
          <br></br>
          <ItemCountContainer/>
          <br></br>
          <button id='button'>Comprar</button>

      </div>

    </div>
  )
}

export default ItemDetail