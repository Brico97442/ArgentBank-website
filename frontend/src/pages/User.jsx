import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/actions/profileActions";
import Editnameform from "../components/Edit-name-form";
import Button from "../components/Button";
import "../styles/user.minify.css";

export function User() {
  const dispatch = useDispatch();
  const userConnected = useSelector((state) => state.login.isConnected);

  const prevUserConnectedRef = useRef();

  useEffect(() => {
    if (prevUserConnectedRef.current !== userConnected) {
      if (userConnected) {
        dispatch(fetchProfileData());
      }
      prevUserConnectedRef.current = userConnected;
    }
  }, [dispatch, userConnected]);

  // Données des comptes
  const accounts = [
    { title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
    { title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
    { title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" }
  ];

  return (
    <>
      <main className="main bg-dark">
        <Editnameform />
        {accounts.map((account, index) => (
          <section key={index} className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <Button content="View transactions" btnClass="transaction-button" />
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default User;
