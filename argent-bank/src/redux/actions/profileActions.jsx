import axios from "axios";
import { setProfile } from "../slice/userprofileSlice";

export const fetchProfileData = () => {
  return async (dispatch, getState) => { // Utilisez getState pour accéder à l'état Redux
    const { token } = getState().login; // Accédez au token dans l'état login
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const responseData = response.data;
        dispatch(setProfile(responseData)); // Met à jour la valeur et déclenche le rendu
      } else {
        console.error("Error response: ", response.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
};
