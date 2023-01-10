import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({product}) => {
    
    const [isadded, setIsadded] = useState (false)

    const {addToCart} = useCartContext()

    const onAdd = (quantity) => {
        addToCart(product ,quantity)
        setIsadded (true)
    }



    return (
        <div className="container" >
            <div className="row p-5 d-flex justify-content-center ">
                <div className="col-md-6 " >
                    <img src={product.image} alt= {product.title} className=" img-fluid shadow bg-body rounded " id="lista2" />
                </div>
                <div className="card-body m-4 col-md-12 offset-md-2">
                    <h1 className="card-title m-2 d-flex justify-content-center">{product.title}</h1>
                    <h2 className="card-title m-2 d-flex justify-content-center">{product.category}</h2>
                    <h4 className="card-text m-2 d-flex justify-content-center">{product.descripcion}</h4>
                    <h3 className="card-text d-flex justify-content-center"><b>$ {product.price}</b></h3>
                <div className="m-1 align-self-end">
                    {   
                        isadded 
                        ?
                        <NavLink to="/cart">
                            <button className="p-2 text-bg-secondary">ir al carrito</button>
                        </NavLink>
                        :
                        <ItemCount initial={product.initial} stock={product.stock} onAdd={onAdd}/>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail