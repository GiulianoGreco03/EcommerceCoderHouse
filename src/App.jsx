import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import { BrowserRouter } from 'react-router'

function App() {
  
  return (
    
    <BrowserRouter>
      <NavBar/>
        <ItemListConteiner message="Bienvenido a mi tienda"></ItemListConteiner>
    </BrowserRouter>
      
    
  )
}

export default App
