import React from "react";
import Logo from "../Assets/logo.png";
import {Link} from "react-router-dom";
// eslint-disable-next-line

function Navbar() {
    return(
        
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
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
                <Link className="navbar-item" to="/"> 
                    Search Books
                </Link>
                <Link className="navbar-item" to="/saved">
                    Saved Books
                </Link>
            </div>
        </div>
    </nav>
)};

export default Navbar; 