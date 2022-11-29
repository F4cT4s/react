import React from "react";
import {useState, useEffect} from "react";
import { products } from "../Data/products";
import { customFetch } from "../Data/customFetch";
import {ItemList} from "./itemList";
import { Loader } from "./loader";


const ItemListContainer = () => {

    const [ listProducts, setListProducts] = useState([])
    
    const [ loading, setloading] = useState (true)

    useEffect (() => {
        customFetch (products)
            .then (res => {
                setloading (false)
                setListProducts(res)
            })
    }, [])

    return (
        <div className="body">
                {
                    loading
                    ?
                    <Loader />
                    :
                    <ItemList listProducts={listProducts} />

                }
        </div>
    )
}

export default ItemListContainer


