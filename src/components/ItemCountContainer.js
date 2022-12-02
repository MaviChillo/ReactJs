import React from 'react'
import '../style.css'
import ItemCount from './ItemCount';

const ItemCountContainer = () => {


  // const onAdd = (qty) => {
  //   qty === 1 ? alert(`Agregaste ${qty} producto`) : alert(`Agregaste ${qty} productos`)
  // }

  return (
    <div>
        <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default ItemCountContainer