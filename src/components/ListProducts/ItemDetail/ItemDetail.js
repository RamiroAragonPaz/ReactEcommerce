import { ProductionQuantityLimits } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import mockProducts from '../ItemDetail/MockProduct';
import './ItemDetail.css'
import Button from '@mui/material/Button';


const ItemDetails = () => {
    const [Items, setItems] = useState([])

    
    const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                return resolve(mockProducts)  
            }, 4000)
        })
    }

  
useEffect( () => {
    getItem().then((Item)=>{
        setItems(Item)
        })
    }, [])


    return (
        <div className="ItemDetailContainer">           
            <h4>{Items.title}</h4>
            <div className='detailcontent'>
                <img className='detail-img' src={Items.image} />
                <div>
                    <p className='detail-price' >Precio: ${Items.price}</p>
                    <p className='detail-duration' >Duración: {Items.duration}</p>
                    <p className='detail-descriptiontitle'>Descripción:</p>
                    <p className='detail-description'>{Items.description}</p>    
                    <Button variant="contained" color="error" >Comprar</Button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;

