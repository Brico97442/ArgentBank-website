import React from "react";

import Form from "../components/Login-form";
import UserItem from "../components/Useritem";

import "../styles/sign-in.minify.css";

export default function Signin() {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <div className="main-nav-item ">
          <UserItem />
          </div>
          <Form />
        </section>
      </main>
    </>
  );
}
