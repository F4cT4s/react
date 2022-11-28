import React from "react";
import Item from "./Item";

const itemList = ({ListProducts}) => {
    
    return (
        <div>
            {ListProducts.map (product => <Item key={product.id} product={product}/>)}
        </div>
    )
}


export default itemList