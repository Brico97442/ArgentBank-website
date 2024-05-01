import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/actions/profileActions";
import Editnameform from "../components/Edit-name-form";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../styles/index.css";
import "../styles/transactions.css";

export function User() {
  const dispatch = useDispatch();
  const userConnected = useSelector((state) => state.login.isConnected); // Récupérer l'état connecté dans le store Redux
  
  useEffect(() => {
    if (userConnected) {
      dispatch(fetchProfileData()); // Appel de la fonction d'action pour récupérer les données de profil
    }
  }, [dispatch ,userConnected]);
  
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <Editnameform />
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Button content="View transactions" btnClass="transaction-button" />
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Button content="View transactions" btnClass="transaction-button" />
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Button content="View transactions" btnClass="transaction-button" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default User;
