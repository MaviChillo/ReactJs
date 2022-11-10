import {useState} from 'react';
import '../style.css'


const ItemCount = ({ onAdd, initial, stock }) => {
  
  const [qty, setQty] = useState(Number(initial));

  const addProduct = (num) => {
    setQty(qty + num);
  };


  return (
    <div className="count-container">

      <div className="count-container__contador">

        <button className="count-container__button" onClick={() => addProduct(-1)} disabled={qty === initial}>-</button>
        <span className="count-container__qty">{qty}</span>
        <button className="count-container__button" onClick={() => addProduct(+1)} disabled={qty === stock}>+</button>

      </div>
      <br />
        <button id="button" onClick={() => { onAdd(qty); }} disabled={stock === 0 ? true : null}> Comprar </button> 
        

    </div>
  );
};

export default ItemCount;



