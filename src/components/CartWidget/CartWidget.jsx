import { useState } from 'react';
import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {

    const [counter] = useState(0);
    
  return (
    <>
      <button className='button-default cart'>
        <FaShoppingCart></FaShoppingCart>
        {counter}
      </button>
      
    </>
  )
}

export default CartWidget