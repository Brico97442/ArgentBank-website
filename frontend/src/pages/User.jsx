import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/actions/profileActions";
import Editnameform from "../components/Edit-name-form";

import Button from "../components/Button";
import "../styles/user.css";

export function User() {
  const dispatch = useDispatch();
  const userConnected = useSelector((state) => state.login.isConnected);

  //utilisation du debouncing pour s'assurer que l'effet ne se déclenche qu'une seule fois après que l'état userConnected a fini de se stabiliser.
  const prevUserConnectedRef = useRef();
  
  useEffect(() => {
    // On vérifie si userConnected a changé depuis la dernière exécution de l'effet
    if (prevUserConnectedRef.current !== userConnected) {
      if (userConnected) {
        dispatch(fetchProfileData());
      }
      // On met à jour la valeur précédente
      prevUserConnectedRef.current = userConnected;
    }
  }, [dispatch, userConnected]);
  
  return (
    <>
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
    </>
  );
}

export default User;
