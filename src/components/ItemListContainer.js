import { useState, useEffect } from "react";
import ItemList from './ItemList.js'
import { getProducts } from "../services/Products";


const ItemListContainer = () => {

  const [prod, setProd] = useState([])
  
  useEffect(() => {
    getProducts().then(data => setProd(data));;
  },[]);

    return (
  
      <div>
          <h3 id="welcome">Black Veil Brides' Merch Store</h3>
           <ItemList products={prod}/> 
      </div>
    );
  }
  
  export default ItemListContainer;