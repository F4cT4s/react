
import { getDoc, doc,  getFirestore } from "firebase/firestore";
import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Loader } from "./Loader";


const ItemDetailContainer = () => {

    const [ product, setItem] = useState([])
    const {id} = useParams ();
    const [ loading, setloading] = useState (true)


    useEffect (() => {
        const db = getFirestore();
        const item = doc(db, "Productos" , id);
        getDoc(item).then ((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()})
                setloading()
            } else {
                console.log("no existe");
            }
        })
    } ,[])


    return (
        <div className="body">
            {
                loading
                ?
                <Loader />
                :
                <ItemDetail product={product} color={product.config.color} size={product.config.size} voltage={product.config.voltage} />
            }
        </div>
    )
}

export default ItemDetailContainer