// LoginForm.js

import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/loginActions";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import "../styles/index.css";

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    try {
      // Appel de l'action login avec l'email, le mot de passe et l'URL de redirection
      await dispatch(login(email, password, "/User"));
      
      navigate("/User"); //Redirection de l'utilisateur vers la page user 

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={submit}>
      {errorMessage && <p className="error-login">{errorMessage}</p>}
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          content="email"
          type="email"
          required
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          content="password"
          type="password"
          required
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input
          type="checkbox"
          id="remember-me"
          onChange={() => setRemember(!remember)}
          checked={remember}
        />
      </div>
      <Button content="Sign In" btnClass="sign-in-button" />
    </form>
  );
}

export default LoginForm;
