import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/products" element={<ItemListConteiner/>}  />
        <Route path="/products/:id" element={<ItemDetail/>}    />
        <Route path='/products/category/:category' element={<ItemListConteiner/>} />
        
        <Route path='*' element={<a>hola</a>} />
      </Routes>
      
    </BrowserRouter>
      
    
  )
}

export default App
