import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount.js'
import './bootstrap.min.css'
import './style.css'

const App = () => {

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

