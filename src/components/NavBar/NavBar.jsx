import CartWidget from '../CartWidget/CartWidget'
import logo from '/assets/logo.png'
import './NavBar.css'
import { Link } from 'react-router'
import { useState } from 'react'

function NavBar() {

  const [open, setOpen] = useState(false)
  
  return (
    <nav className='navbar'>
        <img src={logo} className='logo'></img>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>☰</button>
         <ul className={`nav-links ${open ? 'show' : ''}`}>
           <li className='navbarLi'><Link to="/home" className='nav-link'>Inicio</Link></li>
            <li className='navbarLi'><Link to="/products" className='nav-link'>Catalogo</Link></li>
            <li className='navbarLi'><Link to="/contact" className='nav-link'>Contacto</Link></li>
        </ul>
        <CartWidget></CartWidget>

    </nav>
  )
}

export default NavBar