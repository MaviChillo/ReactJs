import { useState, useEffect } from "react";
import ItemList from './ItemList.js'
import { getProducts } from "../services/Products";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [prod, setProd] = useState([])
  const {idCategoria} = useParams()
  useEffect(() => {
    getProducts(idCategoria).then(data => setProd(data));;
  },[idCategoria]);

    return (
  
      <div>
          <h3 id="welcome">Black Veil Brides' Merch Store</h3>
           <ItemList products={prod}/> 
      </div>
    );
  }
  
  export default ItemListContainer;