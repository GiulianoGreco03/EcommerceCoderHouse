import CartWidget from '../CartWidget/CartWidget'
import logo from '/src/assets/logo.png'
import './NavBar.css'

function NavBar() {
  
  return (
    <nav className='navbar'>
        <img src={logo} className='logo'></img>
        <ul className='links'>
            <li>Inicio</li>
            <li>Catalogo</li>
            <li>Contacto</li>
        </ul>
        <CartWidget></CartWidget>

    </nav>
  )
}

export default NavBar