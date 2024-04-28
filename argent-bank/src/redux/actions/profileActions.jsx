import axios from "axios";
import { setProfile } from "../slice/UserProfileSlice";

export const user = (
  firstName,
  lastName,
  userName,
  email,
  password,
  authToken
) => {
  return async (dispatch) => {
    const profileData = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/signup",
        profileData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.status === 200) {
        const responseData = response.data;
        dispatch(setProfile(responseData)); // màj valeur + déclenche rendu
        console.log(responseData);
        // Redirection après la connexion
      } else {
        const errorMessage = response.data;
        throw new Error(errorMessage.message);
      }
    } catch (error) {
      throw new Error("An error has occurred.");
    }
  };
};
