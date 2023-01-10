import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    return (
        <Link to={"/cart"}>
            <div className="mx-4">
                <button type="button" id="imgCarrito" className="btn position-relative">
                <img src="/images/minecart.svg"  alt="Carrito" width="25" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {totalQuantity()}
                </span>
                </button>
            </div>
        </Link>
    )
}

export default CartWidget