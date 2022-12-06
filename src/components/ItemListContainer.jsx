import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { products } from "../Data/products";
import {ItemList} from "./itemList";
import { Loader } from "./loader";


const ItemListContainer = () => {

    const [ listProducts , setListProducts] = useState([])
    const {id} = useParams()
    const [ loading, setloading] = useState (true)

    useEffect (() => {
        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                res (id ? products.filter (item => item.category === id) : products );
            }, 2000)
        });

            promesa.then ((res) => {
                setloading (false)
                setListProducts(res)
            })
    }, [id])

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


