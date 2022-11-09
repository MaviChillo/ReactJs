import React from 'react'
import Layout from './Layout'
// import Remeras from '../pages/Remeras'
// import Buzos from '../pages/Buzos'
// import Acces from '../pages/Acces'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style.css'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'

const Router = () => (

    <BrowserRouter>
        <Routes>

            <Route element={<Layout/>}>
                
                <Route index element={<ItemListContainer/>}/>
                <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
                <Route path='/product/:idProduct' element={<ItemDetailContainer/>}/>

            </Route>

        </Routes>
    
    </BrowserRouter>


    )


export default Router