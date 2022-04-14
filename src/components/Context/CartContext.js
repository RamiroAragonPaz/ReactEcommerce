import { createContext, useState } from 'react';

const CartContext = createContext();
const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    const addProducts = (product) => {
        let duplicado = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if (duplicado) {
            alert("Ya agregaste este producto al carrito!")
        } else {
        !duplicado && setCartProducts(cartProducts => [...cartProducts, product])
        alert('Producto agregado!')
        }
    }

    const removeProducts = (product) => {
        setCartProducts(cartProducts.filter( (cartProduct) => {
            return cartProduct.id !== product.id
        }))
    }
    
    const [totalPrice, settotalPrice] = useState("")

    const totalizarPrice = () => {
        let total = 0
        cartProducts.map( (cartProduct)=>{
            let nuevoTotal = cartProduct.price + total
            settotalPrice(nuevoTotal)
            })
        return (
            console.log(totalPrice),
            totalPrice
            )
    }
    
    const data = {
        cartProducts,
        addProducts,
        removeProducts,
        totalizarPrice
    }

    return (
        <CartContext.Provider value={data} > 
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export { CartContext }