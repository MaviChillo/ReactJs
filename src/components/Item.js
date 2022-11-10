import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({product}) => {
  
  return (
    <div className='div-prod-child'>
        <strong>{product.nombre}</strong>
          <br></br>
          <br></br>
          <img alt="" className='img-prod' src={product.img}></img>
          <br></br>
          <br></br>
          ${product.precio}
          <br></br>
          <br></br>
          Stock: {product.stock}
          <br></br>
          <br></br>
          <Link id='ver-prod' to={'/product/'+product.id}>Ver producto</Link>
    </div>
  )
}

export default Item