import React from 'react'
import products from '../assets/data.json'
import Img2 from '../components/img/merch/buzos/buzo1.png'
import {useParams, Link} from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import '../style.css'

const Buzos = () => {

    const prod2 = products.find(product => {
        return product.id === 2;
      })

      const {id} = useParams()
    
  return (
    <div>
        <br></br>
        <h2>Buzos</h2>
        <br></br>

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
          <br></br>
          <Link to={'/category/2/prod2'}>Ver detalles</Link>

        </div>
      )}

{id && (
      <div className='div-prod-child-detallado'>

        <strong>{prod2.nombre}</strong>
        <br></br>
        <img alt="" className='img-prod-detallado' src={Img2}></img>
        <br></br>
        {prod2.descripcion}
        <br></br>
        <br></br>
        ${prod2.precio}
        <br></br>
        <br></br>
        Stock: {prod2.stock}
        <br></br>
        <ItemCount/>

      </div>
    )}
    
    </div>
  )
}

export default Buzos