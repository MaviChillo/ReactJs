import React from 'react'
import LoadImg from './img/logo-loader.png'

const Loader = () => {
  return (

    <div className='loader'>
        <img
            alt="logo loader"
            src={LoadImg}
            className="imgLoader ld ld-spin"
        />
    </div>
  )
}

export default Loader