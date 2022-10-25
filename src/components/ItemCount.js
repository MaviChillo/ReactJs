import {useState} from 'react';
import '../style.css'
// import ItemListContainer from './ItemListContainer.js';

const ItemCount = () => {

    const [valor, setValor] = useState(0);
    const [fecha, setFecha] = useState(new Date());

  
    const sumar = () => {
      setValor(valor + 1);
      setFecha(new Date());
    };
  
    const restar = () =>{
      setValor(valor - 1);
      setFecha(new Date());
    }
    return (
      <div>

        
        <br></br>
        
      <div id="count">
        <button class="boton-restar" onClick={restar}> - </button>
        {valor}
        <button class="boton-sumar" onClick={sumar}> + </button>

      </div>
        <p id="fecha">{fecha.toLocaleString()}</p>

      </div>
    );
  }
  
  export default ItemCount;