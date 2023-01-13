import React from "react";
import Item from "./Item";

const ItemList = ({ listProducts }) => {  
    
    return (
        <div className="row g-0 d-flex justify-content-center ">
            {listProducts.map(product => <Item key={product.id} product={product}/>)}
        </div>
    )
}


export default ItemList;