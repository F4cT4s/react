import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";
import ItemDetail from "./ItemDetail";
import { Loader } from "./loader";


const ItemDetailContainer = () => {

    const [ product, setItem] = useState([])
    const {id} = useParams ();
    const [ loading, setloading] = useState (true)
    
        useEffect (() => {
            const promesa = new Promise((res ,rej) =>{
                setTimeout(() =>{
                    res(products.find(product => product.id === parseInt(id)))
                },2000)
            })
                promesa.then ((Data) => {
                    setloading (false)
                    setItem(Data)
                })
        }, [id])

    return (
        <div className="body">
            {
                loading
                ?
                <Loader />
                :
                <ItemDetail product={product} />
            }
        </div>
    )
}

export default ItemDetailContainer