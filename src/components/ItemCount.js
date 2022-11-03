import {useState} from 'react';
import '../style.css'
// import ItemListContainer from './ItemListContainer.js';

const ItemCount = () => {

    let [valor, setValor] = useState(0);
    const [fecha, setFecha] = useState(new Date());

  
    const sumar = () => {
      if (valor <= 7) {
        setValor(valor + 1);
      }
      setFecha(new Date());
    };
  
    const restar = () =>{
      if (valor !== 0){
      setValor(valor - 1);
      }
    setFecha(new Date());
    }
    return (
      <div>

        
        <br></br>
        
      <div id="count">
        <button className="boton-restar" onClick={restar}> - </button>
        {valor}
        <button className="boton-sumar" onClick={sumar}> + </button>

      </div>
        <p id="fecha">{fecha.toLocaleString()}</p>

      </div>
    );
  }
  
  export default ItemCount;