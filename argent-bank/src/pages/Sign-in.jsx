import React from "react";

import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/index.css";

export default function Signin() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <Form/>
        </section>
      </main>

      <Footer />
    </>
  );
}
