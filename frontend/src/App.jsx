import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Sign-in.jsx";
import User from "./pages/User.jsx";
import Notfound from "./pages/Notfound.jsx";

import "./styles/index.css";

export default App;

function App() {
  const token = useSelector((state) => state.login.token);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/user" element={token ? <User /> : <Notfound />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
