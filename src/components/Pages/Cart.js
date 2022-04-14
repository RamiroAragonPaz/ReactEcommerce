import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../NavBar/CartWidget.css'


const Cart = () => {

    const { cartProducts, removeProducts, totalizarPrice} = useContext(CartContext)
    const total = totalizarPrice

    return (
        <div className='carrito'>
            <p className="title">Carrito de Compras</p>
            <Divider />
            {cartProducts.map( (cartProduct) => {
                const { id, image, price, description, title} = cartProduct
            return(
                <div>
                    <MenuItem className='carrito-items' key={id}>
                        <div>
                            <img className='cart-image' src={`./${image}`} /> 
                        </div>
                        <div >
                            <p>{title}</p>
                            <p className='texto'>{description}</p>
                            <span>$ {price}</span>
                        </div>
                            <DeleteIcon onClick={() => removeProducts(cartProduct)}/>
                        </MenuItem>
                    </div>
                    )
            })}
            <div>
            <Link to={`/`}  className='botonContinue'><Button color="error" variant="contained">Continuar Comprando</Button></Link>
            </div>
            <div>
                <Button color="error" variant="contained" onClick={totalizarPrice}>Total:</Button>
            </div>
            
        </div>
    )
}

export default Cart