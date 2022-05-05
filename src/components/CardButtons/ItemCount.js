import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../CardButtons/ItemCount.css';
import ModalCustom from '../modal/modal';
import AlertDialog from '../modal/modal2';

export default function ItemCount ({ action1 }) {


    return(
        <div className="buttons">
            <div className="cart-add">
                <Button variant="contained" color="error" size='large' className='button' onClick={action1}><AlertDialog /></Button>
            </div>
                <div className="cart-add">
            <Link to={`/`}  className='botonContinue'><Button variant="outlined"color="error" className='button' size='large'>Volver a los productos</Button></Link>
            </div>
        </div>
    )
}