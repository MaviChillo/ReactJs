import React from 'react'
import products from '../assets/data.json'
import {getProducts} from '../services/Products';
import {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
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