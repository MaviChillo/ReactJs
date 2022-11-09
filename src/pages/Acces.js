import React from 'react'
import products from '../assets/data.json'
import Img3 from '../components/img/merch/accesorios/beanie.png'
import Img4 from '../components/img/merch/accesorios/buttons.png'
import {useParams, Link} from 'react-router-dom';
import '../style.css'

const Acces = () => {

    const prod3 = products.find(product => {
        return product.id === 3;
      })

    const prod4 = products.find(product => {
        return product.id === 4;
      })

      const {id, id2} = useParams()
      // const {} = useParams()
    
  return (
    <div>
      <br></br>
        <h2>Accesorios</h2>
        <br></br>

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
          <br></br>
          <Link to={'/category/3/prod3'}>Ver detalles</Link>

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
          <br></br>
          <Link to={'/category/3/prod4'}>Ver detalles</Link>

        </div>
      )}

    {id &&(

      <div className='div-prod-child-detallado'>

        <strong>{prod3.nombre}</strong>
        <br></br>
        <img alt="" className='img-prod-detallado' src={Img3}></img>
        <br></br>
        {prod3.descripcion}
        <br></br>
        <br></br>
        ${prod3.precio}
        <br></br>
        <br></br>
        Stock: {prod3.stock}

      </div>

    )}

    {id2 && (
      <div className='div-prod-child-detallado'>

        <strong>{prod4.nombre}</strong>
        <br></br>
        <img alt="" className='img-prod-detallado' src={Img4}></img>
        <br></br>
        {prod4.descripcion}
        <br></br>
        <br></br>
        ${prod4.precio}
        <br></br>
        <br></br>
        Stock: {prod4.stock}

      </div>
    )}

    </div>

    
  )
}

export default Acces