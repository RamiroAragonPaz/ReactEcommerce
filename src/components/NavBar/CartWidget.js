import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';


const CartWidget = () =>{

  const { cartProducts, removeProducts, totalPrice } = useContext(CartContext)
  //Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className='cart' color="error">

            <div>
                <Button
                    color="error"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                <ShoppingCartIcon  color='error'/> 
                    <p className='cart-text'>{cartProducts.length}</p>
                </Button>
                
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                className='menuCart'
                            >
                                {cartProducts.map( (cartProduct) => {
                            const { id,category , image, price, title} = cartProduct
                        return(
                            <div>
                                <MenuItem className='miniCarrito-items' key={id}>
                                    <Link to={`/${category}/${id}`}>
                                        <div className='textoMiniCart' >
                                            <p>{title}</p>
                                            <span>Precio: ${price}</span>
                                        </div>
                                    </Link>
                                    <DeleteIcon className='deleteIcon' onClick={() => removeProducts(cartProduct)}/>    
                                 </MenuItem>
                                 <Divider />
                                </div>
                                )
                        })}
                    <p className="total">Total: {totalPrice}</p>
                    <Divider />
                    <Link to={`/cart`}><MenuItem onClick={handleClose}>Finalizar la Compra</MenuItem></Link>
                </Menu>
                </div>






            

        </div>  
    )
}
export default CartWidget
