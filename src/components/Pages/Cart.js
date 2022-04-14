import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const { cartProducts } = useContext(CartContext)
    
    const Delete = () => {
        console.log("click en eliminar")
    }

    return (
        <div className='carrito'>
            <p className="title">Carrito de Compras</p>
            <Divider />
            {cartProducts.map( (cartProduct) => {
            return(
                    <MenuItem className='carrito-items' key={cartProduct.id}>
                        <div>
                            <img className='cart-image' src={`./${cartProduct.image}`} /> 
                        </div>
                        <div >
                            <p>{cartProduct.title}</p>
                            <p className='texto'>{cartProduct.description}</p>
                            <span>$ {cartProduct.price}</span>
                        </div>
                        <div>
                            <DeleteIcon onClick={Delete}/>
                        </div>
                    </MenuItem>
                )
            })}
        </div>
    )
}

export default Cart