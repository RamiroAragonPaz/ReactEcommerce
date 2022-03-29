import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function ItemCount ({title, stock, initial}) {
    
    
    const [ count, setCount ] = useState(initial);
    

    const addItem = () => {
            if (count < stock) {
            setCount(count + 1)
        } else {
            alert('Alcanzaste el maximo de Stock disponible!')
        }
    }
    const removeItem = () => {
        if (count > 0){
        setCount(count - 1)
    }
}
    const onAdd = () => {
        if (count > 0 ){
            alert("Elegiste: " + count + " " + title)
        }
}
    
    return(
        <div>
            <div className="Buttons">
                <Button color="error"  onClick={removeItem}>-</Button><p>Comprar: {count}</p><Button color="error" onClick={addItem}>+</Button>
            </div>
            <div className="cart-add">
                <Button variant="contained" color="error" onClick={onAdd}>Agregar al carrito</Button>
            </div>
        </div>
    )
}