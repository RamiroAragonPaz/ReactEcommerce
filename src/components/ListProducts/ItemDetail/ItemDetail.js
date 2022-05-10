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
    const [product, setProduct] = useState({})
    const { title, description, price, duration, image } = product
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const { cartProducts, addProducts } = useContext(CartContext)

    const addOnCart = () => {
        if (count > 0 ){
            addProducts(product)
        } else if (count > 1){
          alert('Producto ya agregado')
        } else if (count <= 0 ){
            navigate('/error')
        }
    }

    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
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
   
    return (
        <div className="ItemDetailContainer">           
            <h4>{title}</h4>
            <div className='detailcontent'>
                <img className='detail-img-big' src={`../${image}` } alt={`${image}`}/>
                <div>
                    <p className='detail-price' >Precio: ${price}</p>
                    <p className='detail-duration' >Duración: {duration}</p>
                    <p className='detail-descriptiontitle'>Cantidad: {count}</p>
                    <p className='detail-descriptiontitle'>Descripción:</p>
                    <p className='detail-description'>{description}</p>    
                    <ItemCount action1={addOnCart} data={product}/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetails;

