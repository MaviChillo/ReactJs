import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getProductoById} from '../app/api';

const ItemDetailContainer = () => {
  
  const {idProduct} = useParams();
  const [det, setDet] = useState({})
  
  useEffect(() => {
    getProductoById(idProduct).then(data => setDet(data));;
  },[idProduct]);

  return (
    <div>
        <ItemDetail product={det}/> 
        </div>
  )
}

export default ItemDetailContainer