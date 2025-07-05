import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from '../../context/context';
import { useState } from 'react';


function CartWidget() {

  const {cart} = useAppContext()
  const [open, setOpen] = useState(false);


    
  return (
    <>
       <div className="cart-dropdown-container">
      <button
        className="button-default cart"
        onClick={() => setOpen(!open)}
      >
        <FaShoppingCart />
        {cart.length}
      </button>

      {open && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>Carrito vacío</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong> - unidades:{item.quantity}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
      
    </>
  )
}

export default CartWidget