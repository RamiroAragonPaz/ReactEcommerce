import React, { useState, useEffect } from 'react'
import Item from './Item';
import BasicCard from '../Cards/Cards';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return setTimeout(()=> {
                resolve(Item);
            },2000);
        });
    }

    useEffect( () => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])
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