import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProduct } from "../services/Products";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  
  const {idProduct} = useParams();
  const [det, setDet] = useState({})
  
  useEffect(() => {
    getProduct(idProduct).then(data => setDet(data));;
  },[]);

  return (
    <div>
        <ItemDetail product={det}/> 
        </div>
  )
}

export default ItemDetailContainer