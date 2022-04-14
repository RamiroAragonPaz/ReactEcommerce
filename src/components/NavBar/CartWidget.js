import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () =>{
    const { cartProducts } = useContext(CartContext)
    const carrito = () => {
        console.log('cart:', cartProducts)
    }
    return (
        <div className='cart' color="error">
            <Link to={`/cart`}>
                <ShoppingCartIcon />
                </Link>
                <p className='cart-text'>{cartProducts.length}</p>

        </div>  
    )
}
export default CartWidget