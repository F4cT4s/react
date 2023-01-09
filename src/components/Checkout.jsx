import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { addDoc, collection, getFirestore, doc ,writeBatch, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";






const Checkout = () => {

    const {cartList, totalPrice, cleanCart} = useCartContext()
    
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [checkbox, setCheckbox] = useState(true)
    const [trackerCode, setTrackerCode] = useState("")

    const check = () => {
        setCheckbox (false)
    }


    const generarOrden = () => {
        var randomstring = require("randomstring");
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email, address:direccion},
            items: cartList.map(prod => ({id:prod.id, title:prod.title, price:prod.price, quantity:prod.quantity})),
            total: totalPrice(),
            date: `${fecha.getFullYear()}-${fecha.getMonth() +1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            tracker: randomstring.generate(10),            
        };
        
        setTrackerCode(order.tracker)

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            /*const batch = writeBatch(db);

            /*cartList.forEach(item => {
                let producto = doc(db, "Productos", item.id);
                getDoc(producto).then((snapShot) => {
                    batch.update(producto, {stock:snapShot.data().stock - item.quantity});
                });
            });
            
            batch.commit();*/
            cleanCart ();

    });
    }

    return (
        <div className="body">
            <div className="container" style={{height: '80vh'}}>
                <div className="row my-5">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" placeholder="Ingrese su Nombre y Apellido" onInput={(e) => {setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono:</label>
                                <input type="number" className="form-control" placeholder="Ingrese su numero de Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion:</label>
                                <input type="text" className="form-control" placeholder="Ingrese Direccion de envio" onInput={(e) => {setDireccion(e.target.value)}}/>
                            </div>
                            <div className="my-4">
                                <BootstrapSwitchButton checked={false} onstyle="success" onChange={check} />
                                <label className="mx-3">Acepto Terminos y Condiciones</label>
                            </div>
                            <div>{  
                                    checkbox
                                    ?
                                    <button className="btn btn-danger" disabled>Aceptar Terminos y condiciones</button>
                                    :
                                    <button className="btn btn-success" type="button" onClick={generarOrden}>Realizar pedido</button>}
                                    
                                </div>
                        </form>
                    </div>

                    <div className="col-md-6"> 
                        <table className="table">
                            <tbody>
                                {cartList.map(prod =>
                                    <tr key={prod.id}>
                                        <td ><img src={prod.image} alt={prod.title} width={80} /></td>  
                                        <td  className="aling-middle">{prod.title}</td>
                                        <td  className="aling-middle">{prod.quantity}</td>
                                        <td  className="aling-middle">$ {prod.price * prod.quantity}</td>
                                    </tr>
                                        )
                                    }
                                    <tr>
                                        <td colSpan={2}>&nbsp;</td>
                                        <td ><b>Total</b></td>
                                        <td > <b>$ {totalPrice()}</b></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {trackerCode !== "" ? <Navigate to={"/thankyou/" + trackerCode} /> : ""}
                    </div>
                    </div>
                </div>
            </div>
    )
}


export default Checkout