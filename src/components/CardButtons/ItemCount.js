import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function ItemCount () {
    const [ count, setCount ] = useState(0);
    
    const addItem = () => {
        setCount(count + 1)
    }
    const removeItem = () => {
        setCount(count - 1)
    }
    
    return(
        <div className="Buttons">
            <Button color="error" onClick={removeItem}>-</Button><p>Comprar: {count}</p><Button color="error" onClick={addItem}>+</Button>
        </div>
    )
}