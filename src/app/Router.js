import React from 'react'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style.css'
import ItemListContainer from '../pages/ItemListContainer'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import Cart from '../components/Cart'
import FinalizarCompra from '../components/FinalizarCompra'

const Router = () => (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>

            <Route element={<Layout/>}>
                
                <Route index element={<ItemListContainer/>}/>
                <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
                <Route path='/product/:idProduct' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/cart/finalizar-compra' element={<FinalizarCompra />} />

            </Route>

        </Routes>
    
    </BrowserRouter>


    )


export default Router