import React from "react";
import logo from '../logo.svg';


const NavBar = ({url}) => {
  return (
    <header className="App-header">
        <div className='Logo'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>General Atomics</h1>
        </div>
        <div className='navBar'>
            <ul className="Ul">
                <li className="nav-item">
                    <a aria-current="page" href={url}>HOME</a>
                </li>
                <li className="nav-item">
                    <a aria-current="page" href={url}>HISTORIA</a>
                </li>
                <li className="nav-item">
                    <a aria-current="page" href={url}>CONTACTO</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar;
