import {useState, useEffect} from 'react';
import '../style.css'


const ItemCount = ({ onAdd, initial, stock }) => {
  
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);


  return (
    <div className="count-container">

      <div className="count-container__contador">

        <button className="count-container__button" disabled={count <= 1} onClick={decrease}>-</button>
        <span className="count-container__qty">{count}</span>
        <button className="count-container__button" disabled={count >= stock} onClick={increase}>+</button>

      </div>
      <br />
      <button id="button" disabled={stock <= 0} onClick={() => onAdd(count)}> Agregar al Carrito </button> 

    </div>
  );
};

export default ItemCount;



