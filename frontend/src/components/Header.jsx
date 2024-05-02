import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import picture from "../img/argentBankLogo.png";
import SigninItem from "./Useritem";
import { setSignIn, setSignOut } from "../redux/slice/userloginSlice";
import "../styles/header.css";

export function Header() {
  const userConnected = useSelector((state) => state.login.isConnected);
  const dispatch = useDispatch(); // màj valeur
  const token = useSelector((state) => state.login.token);    // Utilisation de useSelector pour récupérer le State du token dans redux 


  //* Deconnection utilisateur
  const userSignOut = () => {
    dispatch(setSignOut());
  };

  useEffect(() => {
    if (token) {
      dispatch(setSignIn({ token })); // connecter l'utilisateur
    }
  }, [dispatch,token]);

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
        {userConnected ? (
          <div className="nav-items">
            <Link to="/User" className="main-nav-item flex-baseline">
              <SigninItem className="sixteen-pixels" />
            </Link>
            <Link
              to="/Sign-in"
              onClick={userSignOut}
              className="main-nav-item flex-baseline"
            >
              <i className="fa fa-sign-out icon-header"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link to="/Sign-in" className="main-nav-item flex-baseline">
            <SigninItem className="sixteen-pixels" />
          </Link>
        )}
      </nav>
    </header>
  );
}
export default Header;
