import React from 'react'
import {getProducts} from '../services/Products';
import {useState, useEffect} from 'react';
import '../style.css'
import ItemCount from './ItemCount';

const ItemCountContainer = () => {

    const [prod, setProd] = useState([])

    useEffect(() => {
      getProducts().then(data => setProd(data));;
    },[]);

  return (
    <div>
        <ItemCount products={prod}/> 
        </div>
  )
}

export default ItemCountContainer