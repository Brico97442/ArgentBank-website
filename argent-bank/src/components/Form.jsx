import React, { useRef } from "react";

import "../styles/index.css";
import { useDispatch, useSelector } from "react-redux";

export function Form() {
  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
   
    const postData = {
      userName: form.current[0].value,
      password:form.current[1].value
    }

    // dispatch(addPost(postData))
  };
  return (
    <form ref={form} onSubmit={(e) => handleForm(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="current-password" id="password" />
      </div>

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      < input type="submit"  value="Sign in" className="sign-in-button"/>
    </form>
  );
}
export default Form;
