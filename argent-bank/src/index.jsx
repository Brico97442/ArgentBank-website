import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Signin from "./pages/Sign-in";
import User from "./pages/User";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
