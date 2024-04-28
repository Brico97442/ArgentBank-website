import React from "react";
import { useSelector } from "react-redux";
import "../styles/sign-in-item.css";
import "../styles/index.css";

export default function SigninItem({ className }) {
  
  const isConnected = useSelector((state) => state.login.isConnected);    // Accéder à l'état d'authentification depuis le store Redux
  const userProfile = useSelector((state) => state.user)
  // const firstName = userProfile.firstName

  return (
    <>
      <i className="fa fa-user-circle"></i>
      
      <h1 className={className}>{isConnected ? "Le nom doit apparaitre ici" : "Sign In"}</h1>
    </>
  );
}