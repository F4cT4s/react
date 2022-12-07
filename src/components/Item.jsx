import React from "react";
import { Link } from "react-router-dom";


const Item = ({ product }) =>{
    return (
        <div className="m-2 col-lg-4 " id="item">
            <Link to={"/item/" + product.id}>
                <div className="container">
                    <img src={product.image} className="m-4 d-flex justify-content-center shadow-lg p-3 mb-5 bg-body rounded " alt={product.title} style={{ height: 300 }} />
                        <div className="card-body m-2 ">
                            <h5 className="card-title m-2 d-flex justify-content-center " >{product.title}</h5>
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default Item