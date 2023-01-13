import React from "react";
import { useParams, Link } from "react-router-dom";

const CloseInfo  = () => {
    const {id} = useParams();

    return (
        <div className="container-fluid d-flex align-items-center " style={{height: '75vh'}}>
            <div className="row my-5 flex-grow-1 d-flex justify-content-center">
                <div className="col-md-10 text-center">
                    <div className="bg-secondary m-3 p-3" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu Número de Orden es</p>
                        <h2> <b>{id}</b></h2>
                    </div>
                    <Link to={"/"} id="btnGenerico" className="btn">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default CloseInfo;