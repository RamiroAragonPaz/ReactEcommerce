import React, { useState, useEffect } from 'react'
import Item from './Item';
import BasicCard from '../Cards/Cards';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return setTimeout(()=> {
                resolve(Item);
            }, 1);
        });
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
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    return (
        <div className="ItemListContainer">
            {products.map((product) => {
                const {id} = product
                return(
                    <BasicCard data={product} key={id}/>
                )
            })}
        </div>
    )
}

export default ItemList;