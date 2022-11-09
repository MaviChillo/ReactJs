import React from 'react'
import products from '../assets/data.json'
import { getProducts } from "../services/Products";
import {useEffect, useState} from 'react';
import Img1 from '../components/img/merch/remes/reme1.png'
import {Link, useParams} from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import '../style.css'

const Remeras = () => {

  const [prod, setProd] = useState([])

  useEffect(() => {
    getProducts().then(data => setProd(data));;
  },[]);

  const prod1 = products.find(product => {
    return product.id === 1;
})

const {id} = useParams()


  return (
    <div>
        <br></br>
        <h2>Remeras</h2>
        <br></br>
        

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
          <br></br>
          <Link to={'/category/1/prod1'}>Ver detalles</Link>

        </div>
      )}
        
          {id && (
      <div className='div-prod-child-detallado'>

        <strong>{prod1.nombre}</strong>
        <br></br>
        <img alt="" className='img-prod-detallado' src={Img1}></img>
        <br></br>
        {prod1.descripcion}
        <br></br>
        <br></br>
        ${prod1.precio}
        <br></br>
        <br></br>
        Stock: {prod1.stock}
        <br></br>
        <ItemCount/>

      </div>
    )}
        </div>
  )
}

export default Remeras;