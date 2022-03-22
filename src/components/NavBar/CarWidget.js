import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CarWidget = () =>{
    return (
        <Button  color="error"><ShoppingCartIcon className="cart" color="error" /></Button>
    )
}

export default CarWidget;