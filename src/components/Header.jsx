import React from "react";
import NavBar from "./NavBar.jsx";
import CartWidget from "./CartWidget.jsx";

const Header = () => {
    return (
        <div className="p-3" id="Header"> 
            <div className="row">
                <div className="col-md-8">
                    <NavBar />
                </div>
                <div className="col-md-4 p-3 d-flex justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header