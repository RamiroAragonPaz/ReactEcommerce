import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ItemDetailContainer from '../ListProducts/ItemDetail/ItemDetailContainer';
import Item from '../ListProducts/Item';
import { Link } from 'react-router-dom'


export default function ItemCount ({title, stock, initial, id}) {
    
    
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
            alert("Elegiste: " + count + " " + title);
        } else if (count <= 0 ){
            alert("No elegiste la cantidad de tu producto")
        }
}
    
    return(
        <div>
            <div className="Buttons">
                <Button color="error"  onClick={removeItem}>-</Button><p>Comprar: {count}</p><Button color="error" onClick={addItem}>+</Button>
            </div>
            <div className="cart-add">
                <Button id={id} variant="contained" color="error">Ver Más</Button>
            </div>
        </div>
    )
}