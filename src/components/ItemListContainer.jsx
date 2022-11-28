import {useState, useEffect} from "react";
import { customFetch } from "../Data/customFetch";
import { products } from "../Data/products";
import itemList from "./itemList";
const ItemListContainer = ({products}) => {

    const [listProducts, setListProducts] = useState({})

    useEffect (() =>{
        customFetch ()
            .then (res => {
                setListProducts(res)
            })
    }
    , [])

    return (
        <div className="body">
            <div className="row">
                <div className="col-md-12">
                    <itemList/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer