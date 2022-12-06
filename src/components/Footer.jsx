import React from "react";

const Footer = () => {
    return (
        <div className="p-3" id="footer">
            <div className="container">
                <div className="">
                    <div className="container-fluid ">
                    <footer className="d-flex justify-content-between align-items-center py-3">
                            <div className="col-md-4 d-flex align-items-center">
                                <span>©Copyright 2021 LightCrew S.A. Todos los derechos reservados</span>
                                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                    <li className="m-3">
                                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"></img>
                                    </li>
                                    <li className="m-3">
                                        <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" ></img>
                                    </li>
                                    <li className="m-3">
                                        <img src="https://img.icons8.com/color/48/000000/linkedin-2--v1.png" alt="linkedin" />
                                    </li>
                                </ul>
                            </div>
                        </footer> 
                    </div>
            </div>
        </div>
    </div>
    )
}
export default Footer