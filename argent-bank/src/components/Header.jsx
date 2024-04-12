import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";
import image from "../img/argentBankLogo.png";

export function Header() {
  return (
    <div className="header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            alt="Argent Bank Logo"
            src={image}
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;
