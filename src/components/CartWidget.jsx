import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-primary position-relative">
            <img src="/images/minecart.svg" alt="Carrito" width="20" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {totalQuantity()}
            </span>
            </button>
        </Link>
    )
}

export default CartWidget