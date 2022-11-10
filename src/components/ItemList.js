import React from 'react'
import Item from './Item'
import '../style.css'


function ItemList({products}) {

    return(

        <div className='div-prod-father'>
      {products.map(product => <Item key={product.id} product={product} />)}
        </div>

    )
  }


export default ItemList
