import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ContactCard from './components/ContactCard/ContactCard'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

function App() {
  
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/products" element={<ItemListConteiner/>}  />
        <Route path="/products/:id" element={<ItemDetail/>}    />
        <Route path='/products/category/:category' element={<ItemListConteiner/>} />
        <Route path='/contact' element={<ContactCard/>}  />
        <Route path='*' element={<NotFoundPage/>}  />
      </Routes>
      
    </BrowserRouter>
      
    
  )
}

export default App
