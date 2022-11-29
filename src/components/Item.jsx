import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ product }) =>{
    return (
            
                <div className="m-5 col-md-3  text-bg-secondary  ">
                    <img src={product.image} className="m-4 d-flex justify-content-center  " alt="" style={{ height: 300 }} />
                        <div className="card-body m-2 ">
                        <h5 className="card-title m-2 d-flex justify-content-center " >{product.title}</h5>
                        <p className="card-text m-2 d-flex justify-content-center ">{product.descripcion}</p>
                        <h4 className="card-text d-flex justify-content-center"> $ {product.price}</h4>
                        </div>
                    <div className="m-1 align-self-end">
                        <ItemCount initial={product.initial} stock={product.stock}/>
                    </div>
                </div>
            
    )
}

export default Item