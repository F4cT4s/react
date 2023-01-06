import React from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const carrito = () => {

    const {cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    if(cartList.length === 0) {
        return (
            <div className="body">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-12 text-center">
                            <div className="alert alert-danger" role="alert">No Hay productos en el carrito</div>
                            <Link to={"/"} className="btn btn-warning">Pagina Principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="body">
            <div className='container'>
                <div className="row my-5">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan={5} className="text-end"><Link onClick={cleanCart} className='btn btn-primary'>Vaciar carrito</Link></th>
                                </tr>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map(prod =>
                                    <tr key={prod.id}>
                                        <td ><img src={prod.image} alt={prod.title} width={100} /></td>  
                                        <td  className="aling-middle">{prod.title}</td>
                                        <td  className="aling-middle">{prod.quantity}</td>
                                        <td  className="aling-middle">$ {prod.price * prod.quantity}</td>
                                        <td  className="aling-end text-end"><button onClick={() => removeProduct (prod.id)} type="button" className="btn btn-danger">X</button></td>
                                    </tr>
                                        )
                                    }
                                    <tr>
                                        <td colSpan={2}>&nbsp;</td>
                                        <td ><b>Total</b></td>
                                        <td > <b>$ {totalPrice()}</b></td>
                                        <td className="text-end"><Link to={"/Checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div>
        </div>
        
    )
}

    

export default carrito