import React from "react";
import CartWidget from "./CartWidget.jsx";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (    
        <div className="p-3" id="header">
            <div className="row">
                <div className="col-md-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src="/images/elephant.svg" className="imgBrand" width="80" alt="Logo marca"></img></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link" activeclassname="page" to={"/"}>Shop</NavLink>
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/Focos"}>Focos</NavLink>
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/Empotrado"}>Empotrado</NavLink>
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/Accesorios"}>Accesorios</NavLink>
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