import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../styles/index.css";


// redux State

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          required
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="current-password"
          required
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/User"> 
        <Button content="Sign In" btnClass="sign-in-button"/>
      </Link>
    </form>
  );
}
export default Form;
