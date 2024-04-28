import React, { useState} from "react";
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
            {!userProfile.userName ? (
              <>
                {userProfile.firstName} {userProfile.lastName}
              </>
            ) : (
              <>{userProfile.userName} </>
            )}
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
                <input
                  content="email"
                  type="email"
                  required
                  id="username"
                  
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  content="password"
                  type="password"
                  required
                  id="password"
                  
                />
              </div>
              <Button content="Save" width="88px" height="40px" />
            </form>
            <Button
              content="Cancel"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </>
      )}
    </section>
  );
}

export default EditName;
