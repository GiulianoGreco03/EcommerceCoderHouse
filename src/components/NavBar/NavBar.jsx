import CartWidget from '../CartWidget/CartWidget'
import logo from '/assets/logo.png'
import './NavBar.css'
import { Link } from 'react-router'

function NavBar() {
  
  return (
    <nav className='navbar'>
        <img src={logo} className='logo'></img>
        <ul className='links'>
            <li><Link to="/home" className='nav-link'>Inicio</Link></li>
            <li><Link to="/products" className='nav-link'>Catalogo</Link></li>
            <li><Link to="/products/category/plantas_de_interior" className='nav-link'>Plantas de interior</Link></li>
            <li><Link to="/products/category/cactus_y_crasas" className='nav-link'>Cactus y crasas</Link></li>
            <li><Link to="/contact" className='nav-link'>Contacto</Link></li>
        </ul>
        <CartWidget></CartWidget>

    </nav>
  )
}

export default NavBar