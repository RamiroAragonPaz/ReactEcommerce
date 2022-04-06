import React, { useState, useEffect } from 'react'
import './ItemDetail.css'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Item from '../Item'


const ItemDetails = ({data}) => {
    const { id }  = useParams()
    const [product, setProduct] = useState({})
    const { title, description, price, duration, image, stock, initial } = product

    useEffect( () => {
        filterProductById(Item , id)
    }, [id])

    const filterProductById = (array , id ) => {
        return array.map((product)=>{
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return (
        <div className="ItemDetailContainer">           
            <h4>{title}</h4>
            <div className='detailcontent'>
                <img className='detail-img-big' src={`../${image}` } alt={image}/>
                <div>
                    <p className='detail-price' >Precio: ${price}</p>
                    <p className='detail-duration' >Duración: {duration}</p>
                    <p className='detail-descriptiontitle'>Descripción:</p>
                    <p className='detail-description'>{description}</p>    
                    <Button variant="contained" color="error" >Comprar</Button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;

