import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList"
import Loader from "./Loader"




const ItemListContainer = () => {

    const [ listProducts , setListProducts] = useState([])
    const {id} = useParams()
    const [ loading, setloading] = useState (true)


    useEffect (() => {
        const db = getFirestore ();
        const ProductosCollection = collection(db, "Productos");
        const categoryFilter = id ? query(ProductosCollection, where("category", "==", id)) : ProductosCollection;
        getDocs (categoryFilter).then ((snapShot) => {
            setListProducts (snapShot.docs.map((doc) => (
                {id:doc.id,  ...doc.data()}),
                setloading (false),
            ))
        });
    },[id]);


    return (
        <div className="body">
                {
                    loading
                    ?
                    <Loader/>
                    :
                    <ItemList listProducts={listProducts} />

                }
        </div>
    )
}

export default ItemListContainer


