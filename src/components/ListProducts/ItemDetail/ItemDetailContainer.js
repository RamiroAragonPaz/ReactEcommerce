import ItemDetails from './ItemDetail'
import React, { useState, useEffect } from 'react'


const ItemDetailContainer = () =>{
    const [Items, setItems] = useState({})
    const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                return resolve(Items)  
            }, 1)
        })
    }
  
    useEffect( () => {
        getItem().then((Item)=>{
            setItems(Item)
            })
        }, [])
    
    
    return (
        <div>
            <div>
                <h2 className="subtitle"> Este es tu producto elegido </h2>
            </div> 
            <div>
                <ItemDetails data={Items}/>
           </div>    
        </div>
    )
}

export default ItemDetailContainer;

