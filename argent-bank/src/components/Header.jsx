import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/header.css";
import picture from "../img/argentBankLogo.png";
import SigninItem from "./Sign-in-item";
import { setSignIn, setSignOut } from "../redux/slice/userloginSlice";

export function Header() {
  const userConnected = useSelector((state) => state.login.isConnected);
  const token = useSelector((state) => state.login.token);

  const dispatch = useDispatch(); // màj valeur

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
          <>
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
          </>
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
