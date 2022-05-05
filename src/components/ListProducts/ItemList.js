import React, { useState, useEffect } from 'react'
import BasicCard from '../Cards/Cards';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import './ItemList.css'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../Firebase/Firebase';


const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    const getProducts = async () => {
        const itemsCollection = collection( db, 'productos' )
        const productSnapshot = await getDocs(itemsCollection)
        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
            }
        )
        return productList
    }

    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }


    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            setLoading(false)
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    return (
        <div className="ItemListContainer">
            {loading ? (<CircularProgress className="spinner" color="error"/>)
            : (
                <>
            {products.map((product) => {
                const {id} = product
                return(
                    <BasicCard data={product} key={id}/>
                    ) 
                })}
                </>
                )}
         </div>
    )
}

export default ItemList;