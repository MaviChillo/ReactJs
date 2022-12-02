import  {React} from 'react';
import Router from './app/Router.js';
import CartContext from './context/CartContext'
import './bootstrap.min.css'
import './loading.min.css'
import './style.css'


const App = () => (
    <CartContext>

    <Router/>

    </CartContext>

)

export default App;
