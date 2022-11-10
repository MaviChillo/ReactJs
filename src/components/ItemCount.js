import {useState} from 'react';
import '../style.css'

const ItemCount = ({products}) => {

    let [valor, setValor] = useState(0);

    // const stock = products[6].stock
    
    // console.log(products[0].id)
    // console.log(products[0].stock)


      const sumar = () => {
        if (valor < 10){
      setValor(valor + 1);
      }
    }
  
    const restar = () =>{
      if (valor !== 0){
      setValor(valor - 1);
      }
    }

  
  return (
      <div>

        
        <br></br>
        
      <div id="count">
        <button className="boton-restar" onClick={restar}> - </button>
        {valor}
        <button className="boton-sumar" onClick={sumar}> + </button>

      </div>
        

      </div>
    );
  }
  
  export default ItemCount;