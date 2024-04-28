import React from "react";
import { useSelector } from "react-redux";

import "../styles/sign-in-item.css";
import "../styles/index.css";

export default function SigninItem({ className }) {
  // Accéder à l'état d'authentification depuis le store Redux
  const isConnected = useSelector((state) => state.login.isConnected);

  return (
    <>
      <i className="fa fa-user-circle"></i>
      {/* Afficher "Logout" si l'utilisateur est connecté, sinon afficher "Sign In" */}
      <h1 className={className}>{isConnected ? "Logout" : "Sign In"}</h1>
    </>
  );
}