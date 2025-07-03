import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

export const ContextProvider = (props) => {


    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        if (newProduct.quantity <= 0) return;
        if(cart.some((product)=>product.id === newProduct.id)){
            const newCart = cart.map((product)=>
                product.id === newProduct.id ?
                     {id:newProduct.id, title:newProduct.title, quantity: product.quantity + newProduct.quantity} :
                     product
            )
            setCart(newCart)
        } else{
          setCart([...cart, newProduct])  
        }
        
    }

    return(
        <AppContext.Provider value={{cart, addToCart}}>
            {props.children}
        </AppContext.Provider>
    )
}