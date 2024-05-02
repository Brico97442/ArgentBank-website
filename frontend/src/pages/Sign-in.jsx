import React from "react";

import Form from "../components/Login-form";

import UserItem from "../components/Useritem";

import "../styles/index.css";
import "../styles/sign-in.css";

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
