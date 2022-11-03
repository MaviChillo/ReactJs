import React from 'react'
import Img1 from '../components/img/merch/remes/reme1.png'
import Img2 from '../components/img/merch/buzos/buzo1.png'
import Img3 from '../components/img/merch/accesorios/beanie.png'
import Img4 from '../components/img/merch/accesorios/buttons.png'


function ItemList({products}) {

  const prod1 = products.find(product => {
    return product.id === 1;
})

  const prod2 = products.find(product => {
    return product.id === 2;
  })

  const prod3 = products.find(product => {
    return product.id === 3;
  })

  const prod4 = products.find(product => {
    return product.id === 4;
  })


  const detallado = products.find(product => {
    return product.id === 1;
  })


  return (
    <div className='itemList'>

      <div className='div-prod-father'>

      {prod1 && (
        <div className='div-prod-child'>

          <strong>{prod1.nombre}</strong>
          <br></br>
          <br></br>
          <img alt="" className='img-prod' src={Img1}></img>
          <br></br>
          <br></br>
          ${prod1.precio}
          <br></br>
          <br></br>
          Stock: {prod1.stock}

        </div>
      )}

      {prod2 && (
        <div className='div-prod-child'>

          <strong>{prod2.nombre}</strong>
          <br></br>
          <br></br>
          <img alt="" className='img-prod' src={Img2}></img>
          <br></br>
          <br></br>
          ${prod2.precio}
          <br></br>
          <br></br>
          Stock: {prod2.stock}

        </div>
      )}

      {prod3 && (
        <div className='div-prod-child'>

          <strong>{prod3.nombre}</strong>
          <br></br>
          <br></br>
          <img alt="" className='img-prod' src={Img3}></img>
          <br></br>
          <br></br>
          ${prod3.precio}
          <br></br>
          <br></br>
          Stock: {prod3.stock}

        </div>
      )}

      {prod4 && (
        <div className='div-prod-child'>

          <strong>{prod4.nombre}</strong>
          <br></br>
          <br></br>
          <img alt="" className='img-prod' src={Img4}></img>
          <br></br>
          <br></br>
          ${prod4.precio}
          <br></br>
          <br></br>
          Stock: {prod4.stock}

        </div>
      )}

    </div>

      <br></br>
      <br></br>


      <h6>Información Detallada</h6>

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
      <br></br>


    </div>
  )
}

export default ItemList
