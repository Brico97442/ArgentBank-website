import React from "react";
import { useSelector } from "react-redux";
import "../styles/sign-in-item.css";
import "../styles/index.css";

export default function SigninItem({ className }) {
  const userProfile = useSelector((state)=> state.user)
  console.log(userProfile)
  const isConnected = useSelector((state) => state.login.isConnected);    // Accéder à l'état d'authentification depuis le store Redux
  const firstName = userProfile.firstName
  
  return (
    <>
      <i className="fa fa-user-circle"></i>
      <h1 className={className}>{isConnected ? firstName : "Sign In"}</h1>
    </>
  );
}