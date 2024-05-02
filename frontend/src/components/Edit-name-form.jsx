import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../redux/actions/profileActions.jsx";

import Button from "./Button.jsx";
import "../styles/index.css";

function EditName() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user);
  const userToken = useSelector((state) => state.login.token); 

  const [isOpen, setIsOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(userProfile.userName);

  const saveChange = (event) => {
    event.preventDefault();
    dispatch(updateUserProfile(newUsername, userToken)); // Utilisez le token d'authentification
    setIsOpen(false);
  };

  return (
    <section className="edit-user-modal">
      {!isOpen ? (
        <>
          <h1>
            Welcome back
            <br />
            {userProfile.userName} 
          </h1>
          <Button
            content="Edit Name"
            onClick={() => {
              setIsOpen(true);
            }}
            btnClass="edit-button"
          />
        </>
      ) : (
        <>
          <h1 className="title-user">Edit user info</h1>
          <div className="modal">
            <form onSubmit={saveChange}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  content="username"
                  type="text"
                  required
                  id="username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstname">First name</label>
                <input
                  content="firsname"
                  type="text"
                  id="firstname"
                  disabled
                  value={userProfile.firstName}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname">Last name</label>
                <input
                  content="lastname"
                  type="text"
                  id="lastname"
                  disabled
                  value={userProfile.lastName}
                />
              </div>
              <div className="button-wrapper">
                <Button
                  content="Save"
                  width="88px"
                  height="40px"
                  type="submit"
                  btnClass="saveandcancel-button"
                />
                <Button
                  content="Cancel"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  btnClass="saveandcancel-button"
                />
              </div>
            </form>
          </div>
        </>
      )}
    </section>
  );
}

export default EditName;
