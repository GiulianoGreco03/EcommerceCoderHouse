import { useState } from 'react';
import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {

    const [counter] = useState(0);
    
  return (
    <>
      <button className='cartButton'>
        <FaShoppingCart></FaShoppingCart>
        <div className='cartCounter'>{counter}</div>
      </button>
      
    </>
  )
}

export default CartWidget