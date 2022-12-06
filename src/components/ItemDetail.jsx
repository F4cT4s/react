import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
    
    return (
        <div className="row py-5 text-bg-secondary">
            <div className="col-md-4 offset-md-2">
                <img src={product.image} alt= {product.title} className="img-fluid" />
            </div>
            <div className="card-body m-2 col-md-4 offset-md-2">
                <h1 className="card-title m-2 d-flex justify-content-center">{product.title}</h1>
                <h2 className="card-title m-2 d-flex justify-content-center">{product.category}</h2>
                <h5 className="card-text m-2 d-flex justify-content-center">{product.descripcion}</h5>
                <h3 className="card-text d-flex justify-content-center"><b>${product.price}</b></h3>
            <div className="m-1 align-self-end">
                    <ItemCount initial={product.initial} stock={product.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail