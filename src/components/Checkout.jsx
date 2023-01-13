import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";


const Checkout = () => {

    const {cartList, totalPrice, cleanCart} = useCartContext()

    const [isFormValid, setIsFormValid] = useState(false);
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [checkbox, setCheckbox] = useState(false)
    const [trackerCode, setTrackerCode] = useState("")
    const [checkboxError, setCheckboxError] = useState("");


    const handleNombreChange = (e) => {
        const nombre = e.target.value;
        setNombre(nombre);
        checkFormValidity();
    };
    
    const handleTelefonoChange = (e) => {
        const telefono = e.target.value;
        setTelefono(telefono);
        checkFormValidity();
    };
    
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        checkFormValidity();
    };
    
    const handleDireccionChange = (e) => {
        const direccion = e.target.value;
        setDireccion(direccion);
        checkFormValidity();
    };
    
    const checkFormValidity = () => {
        if (nombre.trim().length > 0 && telefono.trim().length > 0 && email.trim().length > 0 && direccion.trim().length > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const check = () => {
        setCheckbox(!checkbox);
        checkFormValidity();
    };


    const generarOrden = () => {
        if (checkbox){
        var randomstring = require("randomstring");
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email, address:direccion},
            items: cartList.map(prod => ({id:prod.id, title:prod.title, price:prod.price, quantity:prod.quantity, color:prod.color, size:prod.size, voltage:prod.voltage })),
            total: totalPrice(),
            date: `${fecha.getFullYear()}-${fecha.getMonth() +1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            tracker: randomstring.generate(10),            
        };
        
        setTrackerCode(order.tracker)

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(() => {
            cleanCart ();
    })
    } else {
        setCheckboxError("Debe de aceptar terminos y condiciones");
    }}

    return (
        <div className="body">
            <div className="container-fluid px-5" style={{height: '100vh'}}>
                <div className="row my-5">
                    <div className="col-md-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" placeholder="Ingrese su Nombre y Apellido"  onInput={handleNombreChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono:</label>
                                <input type="number" className="form-control" placeholder="Ingrese su numero de Telefono" onInput={handleTelefonoChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="text" className="form-control"  placeholder="Ingrese su Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                                onInput={handleEmailChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion:</label>
                                <input type="text" className="form-control" placeholder="Ingrese Direccion de envio" onInput={handleDireccionChange}/>
                            </div>
                            <div className="my-4">
                                <BootstrapSwitchButton checked={checkbox} onstyle="success" onChange={check} />
                                <label className="mx-3">Acepto Terminos y Condiciones</label>{checkboxError && <div className="error">{checkboxError}</div>}
                            </div>
                            <button type="button" className="btn btn-success" onClick={generarOrden} disabled={!isFormValid}>Realizar Pedido</button>
                            {!isFormValid && <div className="error">Por favor complete todos los campos</div>}
                        </form>
                    </div>

                    <div className="col-md-7 my-2"> 
                        <table className="table table-striped">
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
                        {trackerCode !== "" ? <Navigate to={"/closeinfo/" + trackerCode} /> : ""}
                    </div>
                    </div>
                </div>
            </div>
    )
}


export default Checkout