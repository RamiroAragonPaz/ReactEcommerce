import { ProductionQuantityLimits } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import Item from '../Item';

console.log(Item)

const ItemDetails = () => {
    const [details, setDetails] = useState([])
    
    const getDetails = () => {
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                return resolve(Item ) 
            }, 2000)
        })
    }

    useEffect( () => {
        getDetails().then((data)=>{
            setDetails(data)
            })
        }, [])


    return (
        <div className="ItemDetailContainer">   
        {details.map((detail)=>{
            return (
                <div>
                    <p>Nombre: {detail.title}</p>
                </div>
            )
        })}
        
        </div>
    )
}

export default ItemDetails;