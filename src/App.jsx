import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'

function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <ItemListConteiner message="Bienvenido a mi tienda"></ItemListConteiner>
    </>
  )
}

export default App
