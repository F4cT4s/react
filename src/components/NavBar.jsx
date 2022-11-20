import React from "react";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href=""><img src="images/plane.svg" className="imgBrand" width="80"></img></a>
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
    )
}

export default NavBar