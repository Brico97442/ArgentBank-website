import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signin() {
  return (
    <body>
      <Header />
      <Link to="/User"> Signin </Link>
      <Footer />
    </body>
  );
}
