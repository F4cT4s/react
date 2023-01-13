import React from "react";

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="container" id="footer">
            <div className="">
                <div className="row">
                    <div className="d-flex align-items-center">
                        <div className="col-sm-8 m-3" >
                            <span><b>©Copyright {year} WizLighting International. Todos los derechos reservados</b></span>
                        </div>
                        <div className="col-sm-3 m-3">
                            <ul className="d-flex justify-content-end list-unstyled d-flex">
                                <li className="m-3">  
                                    <a href="https://www.facebook.com/WiZlighting" target="_blank" rel="noopener noreferrer" ><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"></img> </a>
                                </li>
                                <li className="m-3">
                                    <a href="https://www.instagram.com/wizlighting/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" ></img></a>                               
                                </li>
                                <li className="m-3">
                                    <a href="https://www.linkedin.com/company/wizconnected/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin-2--v1.png" alt="linkedin" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer