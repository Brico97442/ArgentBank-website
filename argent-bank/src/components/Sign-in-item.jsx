import React from "react";

import "../styles/sign-in-item.css";
import "../styles/index.css";

export default function SigninItem({ className }) {
  return (
    <>
      <i className="fa fa-user-circle"></i>
      <h1 className={className}>Sign In</h1>
    </>
  );
}
