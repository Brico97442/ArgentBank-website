import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";
import "../styles/index.css";

function EditName() {
  const userProfile = useSelector((state) => state.user); // récup données user
  const [isOpen, setIsOpen] = useState(false); // form fermé par défaut

  return (
    <section className="edit-user-modal">
      {!isOpen ? (
        //* Mode édition désactivé
        <>
          <h1>
            Welcome back
            <br />
            <>{userProfile.userName} </>
            le nom doit apparaitre ici
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
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input content="username" type="text" required id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstname">First name</label>
                <input
                  content="firsname"
                  type="text"
                  required
                  id="firstname"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname">Last name</label>
                <input
                  content="lastname"
                  type="text"
                  required
                  id="lastname"
                />
              </div>
              <div className="button-wrapper">
                <Button content="Save" width="88px" height="40px" />
                <Button
                  content="Cancel"
                  onClick={() => {
                    setIsOpen(false);
                  }}
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
