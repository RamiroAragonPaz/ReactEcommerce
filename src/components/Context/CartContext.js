import { createContext, useState } from 'react';

const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const addProducts = (product) => {
        let duplicado = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if (duplicado) {
            alert("Ya agregaste este producto al carrito!")
        } else {
        !duplicado && setCartProducts(cartProducts => [...cartProducts, product])
        alert('Producto agregado!')
        setTotalPrice(totalPrice + product.price)
        console.log('total', totalPrice)
        }
    }

    const removeProducts = (product) => {
        setTotalPrice(totalPrice - product.price)
        setCartProducts(cartProducts.filter( (cartProduct) => {
            return cartProduct.id !== product.id
        }))
    }
    
    const data = {
        cartProducts,
        addProducts,
        removeProducts,
        totalPrice
    }

    return (
        <CartContext.Provider value={data} > 
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export { CartContext }