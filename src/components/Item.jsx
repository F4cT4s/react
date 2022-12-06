import React from "react";
import { Link } from "react-router-dom";


const Item = ({ product }) =>{
    return (
        <div className="m-5 col-md-3  text-bg-secondary  ">
            <Link to={"/item/" + product.id}>
                <div className="text-bg-secondary  ">
                    <img src={product.image} className="m-4 d-flex justify-content-center  " alt="" style={{ height: 300 }} />
                        <div className="card-body m-2 ">
                            <h5 className="card-title m-2 d-flex justify-content-center " >{product.title}</h5>
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default Item