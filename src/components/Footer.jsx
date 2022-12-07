import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" container position-relative bottom-0 end-0" id="footer">
                    <div className="row">
                            <div className="d-flex align-items-center">
                                <div className="col-sm-8 m-3" >
                                    <span><b>©Copyright 2021 WizLighting International. Todos los derechos reservados</b></span>
                                </div>
                            <div className="col-sm-3 m-3">
                                <ul className="d-flex justify-content-end list-unstyled d-flex">
                                    <li className="m-3">  
                                        <Link to={{ pathname: "https://www.facebook.com" }} target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"></img> </Link>
                                    </li>
                                    <li className="m-3">
                                    <Link to={{ pathname: "https://www.instagram.com" }} target="_blank"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" ></img> </Link>
                                    </li>
                                    <li className="m-3">
                                    <Link to={{ pathname: "https://www.linkefin.com" }} target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin-2--v1.png" alt="linkedin" /> </Link>
                                    </li>
                                </ul>
                            </div>
                            </div>
                    </div>
            </div>
    )
}
export default Footer