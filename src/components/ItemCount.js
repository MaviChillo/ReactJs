import {useState} from 'react';
import '../style.css'
// import ItemListContainer from './ItemListContainer.js';


const ItemCount = () => {

    const [v, setV] = useState(0);
  
    const sumar = () => {
      setV(v + 1);
    };
  
    const restar = () =>{
      setV(v - 1);
    }
    return (
  
      <div id="count">
  
        <button class="boton-sumar" onClick={sumar}> + </button>
        {v}
        <button class="boton-restar" onClick={restar}> - </button>
      </div>
    );
  }
  
  export default ItemCount;