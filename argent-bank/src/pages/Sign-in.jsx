import React from "react";

import Form from "../components/Login-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SigninItem from "../components/Sign-in-item";

import "../styles/index.css";
import "../styles/sign-in.css";

export default function Signin() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <div className="main-nav-item ">
            <SigninItem/>
          </div>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}
