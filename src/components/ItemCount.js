import {useState} from 'react';
import '../style.css'
// import ItemListContainer from './ItemListContainer.js';

const ItemCount = () => {

    const [v, setV] = useState(0);
    const [fecha, setFecha] = useState(new Date());

  
    const sumar = () => {
      setV(v + 1);
      setFecha(new Date());
    };
  
    const restar = () =>{
      setV(v - 1);
      setFecha(new Date());
    }
    return (
      <div>

        
        <br></br>
        
      <div id="count">
        <button class="boton-restar" onClick={restar}> - </button>
        {v}
        <button class="boton-sumar" onClick={sumar}> + </button>

      </div>
        <p id="fecha">{fecha.toLocaleString()}</p>

      </div>
    );
  }
  
  export default ItemCount;