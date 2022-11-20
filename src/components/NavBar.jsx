import React from "react";
import CartWidget from "./CartWidget.jsx";


const NavBar = () => {
    return (
        <div className="p-3" id="header">
            <div className="row">
                <div className="col-md-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href=""><img src="images/elephant.svg" className="imgBrand" width="80"></img></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" aria-current="page" href="">Shop</a>
                                    <a className="nav-link" href="">Envios</a>
                                    <a className="nav-link" href="">Sucursal</a>
                                    <a className="nav-link" href="">Nosotros</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-4 p-3 d-flex justify-content-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar