import React, { useState, useEffect } from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom';
import Item from '../Item'
import ItemCount from '../../CardButtons/ItemCount';


const ItemDetails = ({data}) => {
    const { id }  = useParams()
    const [product, setProduct] = useState({})
    const { title, description, price, duration, image, stock, initial } = product
    const [count, setCount] = useState(0)

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

console.log(count)

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
            console.log ('topu')
            alert("Elegiste: " + count + " " + title);
        } else if (count <= 0 ){
            alert("No elegiste la cantidad de tu producto")
        }
}
    
    return (
        <div className="ItemDetailContainer">           
            <h4>{title}</h4>
            <div className='detailcontent'>
                <img className='detail-img-big' src={`../${image}` } alt={image}/>
                <div>
                    <p className='detail-price' >Precio: ${price}</p>
                    <p className='detail-duration' >Duración: {duration}</p>
                    <p className='detail-descriptiontitle'>Cantidad: {count}</p>
                    <p className='detail-descriptiontitle'>Descripción:</p>
                    <p className='detail-description'>{description}</p>    
                    <ItemCount action1={onAdd} action2={addItem} action3={removeItem} data={product}/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;

