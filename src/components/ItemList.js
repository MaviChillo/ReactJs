import React from 'react'
import {Link} from 'react-router-dom';
import '../style.css'


function ItemList({products}) {


  const prods = products.map((product) =>{
    return(
      <div key={product.nombre} className='div-prod-child'>

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
  })


  // const detallado = products.find(product => {
  //   return product.id === 1;
  // })


  return (
    <div className='itemList'>

      <div className='div-prod-father'>

      {prods}

    </div>

      <br></br>
      <br></br>


      {/* <h6>Información Detallada</h6>

      {detallado && (
        <div className='div-prod-child-detallado'>

          <strong>{detallado.nombre}</strong>
          <br></br>
          <img alt="" className='img-prod-detallado' src={Img1}></img>
          <br></br>
          {detallado.descripcion}
          <br></br>
          <br></br>
          ${detallado.precio}
          <br></br>
          <br></br>
          Stock: {detallado.stock}

        </div>
      )}
      <br></br> */}


    </div>
  )
}

export default ItemList
