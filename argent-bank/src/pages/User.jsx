import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../styles/index.css"
import "../styles/transactions.css"

export function User() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
      <div className="edit-user-modal">
        <h1>Welcome back<br/>Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button content="View transactions" btnClass="transaction-button"/>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button content="View transactions" btnClass="transaction-button"/>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button content="View transactions" btnClass="transaction-button"/>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

export default User;
