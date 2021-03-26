import React from "react";
import Logo from "../Assets/logo.png";
// eslint-disable-next-line

function Navbar() {
    return(
        
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item">
                <img src={Logo} width="112" height="28"></img>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    Search Books
                </a>
                <a className="navbar-item">
                    Saved Books
                </a>
            </div>
        </div>
    </nav>
)};

export default Navbar; 