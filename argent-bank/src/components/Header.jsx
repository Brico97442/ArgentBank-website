import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";
import picture from "../img/argentBankLogo.png";
import SigninItem from "./Sign-in-item";

export function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            alt="Argent Bank Logo"
            src={picture}
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link className="main-nav-item flex-baseline" to="/sign-in">
          <SigninItem className="sixteen-pixels" />
        </Link>
      </nav>
    </header>
  );
}
export default Header;
