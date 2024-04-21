import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Button from "./Button";
import "../styles/index.css";
import { setSignIn } from "../redux/slice/userloginSlice";

export function LoginForm() {
  const redirection = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    //* Envoie requête vers API pour connexion
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const responseData = response.data; // récup données
        const token = responseData.body.token; // extract token auth
        localStorage.setItem("authToken", token); // save token
        dispatch(setSignIn({ token })); // envoie action au store (user connecté)
        redirection("/User"); // redirection
      } else {
        const errorResponseData = response.data;
        setErrorMessage(errorResponseData.message); // màj message erreur
      }
    } catch {
      //* Gestion erreurs imprévues
      setErrorMessage("An error as occured."); // màj message erreur
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
