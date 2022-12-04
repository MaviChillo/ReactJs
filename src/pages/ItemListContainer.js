import { useState, useEffect } from "react";
import ItemList from '../components/ItemList.js'
import { useParams } from "react-router-dom";
import {getProductosByCondition} from '../app/api';
import Loader from '../components/Loader'


const ItemListContainer = () => {

  const [prod, setProd] = useState([])
  const {idCategoria} = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    getProductosByCondition(idCategoria).then(data =>setProd(data));
      },[idCategoria]);

    return (
  
      <div>
          
          {
                loading ? <Loader />
                    :
                    <div>
                      <h3 id="welcome">Black Veil Brides' Merch Store</h3>
                        <ItemList products={prod}/> 
                    </div>
            }
      </div>
    );
  }
  
  export default ItemListContainer;