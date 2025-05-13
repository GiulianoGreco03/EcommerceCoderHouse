import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
  
  return (
    <nav className='navbar'>
        <div className='logo'>logo</div>
        <ul className='enlaces'>
            <li>Inicio</li>
            <li>Catalogo</li>
            <li>Contacto</li>
        </ul>
        <CartWidget></CartWidget>

    </nav>
  )
}

export default NavBar