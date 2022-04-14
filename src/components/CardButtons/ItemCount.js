import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ItemDetailContainer from '../ListProducts/ItemDetail/ItemDetailContainer';
import Item from '../ListProducts/Item';



export default function ItemCount ({ action1, action2, action3 }) {
    
    return(
        <div className="buttons">
            <Button color="error"  onClick={action3}>-</Button>
            <div className="cart-add">
            <Button variant="contained" color="error" onClick={action1}>Comprar</Button>
            </div>
            <Button color="error" onClick={action2}>+</Button>
        </div>
    )
}