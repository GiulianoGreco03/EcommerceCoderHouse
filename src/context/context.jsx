import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

export const ContextProvider = (props) => {


    const [cart, setCart] = useState([]);

    const addToCart = (newProduct, quantity) => {
        if (quantity <= 0) return;
        if(cart.some((product)=>product.id === newProduct.id)){
            const newCart = cart.map((product)=>
                product.id === newProduct.id ?
                     {id:newProduct.id, title:newProduct.title, price:newProduct.price, quantity: product.quantity + quantity} :
                     product
            )
            setCart(newCart)
        } else{
          setCart([...cart, {id:newProduct.id, title:newProduct.title, price:newProduct.price, quantity:quantity}])  
        }
        
    }

    return(
        <AppContext.Provider value={{cart, addToCart}}>
            {props.children}
        </AppContext.Provider>
    )
}