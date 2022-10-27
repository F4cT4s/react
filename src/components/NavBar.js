import React from "react";
import logo from '../logo.svg';


function NavBar() {
  return (
    <header className="App-header">
        <div className='Logo'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>General Atomics</h1>
        </div>
        <div className='navBar'>
            <ul className="Ul">
                <li className="nav-item">
                    <a aria-current="page" href="">HOME</a>
                </li>
                <li className="nav-item">
                    <a aria-current="page" href="">HISTORIA</a>
                </li>
                <li className="nav-item">
                    <a aria-current="page" href="">CONTACTO</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar;
