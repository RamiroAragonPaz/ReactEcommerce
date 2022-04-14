import { createContext, useState } from 'react';

const CartContext = createContext();
const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    const addProducts = (product) => {
        setCartProducts(cartProducts => [...cartProducts, product])
        }

    const data = {
        cartProducts,
        addProducts
        }

    return (
        <CartContext.Provider value={data} > 
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export { CartContext }