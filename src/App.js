import NavBar from './components/NavBar.js'
import  {React, useEffect } from 'react';
import ItemListContainer from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount.js'
import {getProducts} from './services/Products.js'
import './bootstrap.min.css'
import './style.css'



const App = () => {

  useEffect(() => {
    setTimeout(()=>{
      getProducts().then(data => {
      console.log(data)
    })
    }, 2000)
  });
  
  return (

    <div>
        <NavBar sticky="top"/>

        
        <ItemListContainer/>
        <br></br>

        <ItemCount/>
    </div>
  );
}

export default App;
