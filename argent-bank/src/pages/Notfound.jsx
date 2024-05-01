import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

export function Notfound() {
  return (
    <div className="not-found">
      
      <section className="not-found-container">
        <h1>404</h1>
        <h2> This page doesn't exist </h2>
        <Link to="/"> Return home </Link>
      </section>
      
    </div>
  );
}
export default Notfound;
