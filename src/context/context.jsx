import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

export const ContextProvider = (props) => {


    const [cart, setCart] = useState([]);

    const addToCart = (product) => setCart([...cart, product])

    return(
        <AppContext.Provider value={{cart, addToCart}}>
            {props.children}
        </AppContext.Provider>
    )
}