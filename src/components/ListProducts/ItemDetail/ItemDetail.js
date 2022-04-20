import React, { useState, useEffect, useContext } from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import ItemCount from '../../CardButtons/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../../Firebase/Firebase'

const ItemDetails = ({data}) => {
    const { id }  = useParams()
    console.log(id);
    const [product, setProduct] = useState({})
    const { title, description, price, duration, image, stock, initial } = product
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const { cartProducts, addProducts } = useContext(CartContext)
    
    
    const addOnCart = () => {
        
        if (count > 0 ){
            console.log("cart:", cartProducts)
            addProducts(product)
        } else if (count <= 0 ){
            alert("No elegiste la cantidad de tu producto")
            navigate('/error')
        }
    }

    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
          }
    }

    useEffect( () => {
        getProduct()
    }, [id])
 
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
                    <ItemCount action1={addOnCart} action2={addItem} action3={removeItem} data={product}/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;

