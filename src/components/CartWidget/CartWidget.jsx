import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from '../../context/context';

function CartWidget() {

  const {cart} = useAppContext()
    
  return (
    <>
      <button className='button-default cart'>
        <FaShoppingCart></FaShoppingCart>
        {cart.length}
      </button>
      
    </>
  )
}

export default CartWidget