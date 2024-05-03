import axios from "axios";
import { setProfile, changeUserName } from "../slice/userprofileSlice";

export const fetchProfileData = () => {
  return async (dispatch, getState) => {
    
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
        dispatch(setProfile(responseData)); 
      } else {
        console.error("Error response: ", response.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
};


export const updateUserProfile = (editedUserName, userToken) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          userName: editedUserName,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(changeUserName(editedUserName));
        return true;
      } else {
        console.error("Error - updateUserProfile: ", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Another Error - updateUserProfile: ", error);
      return false;
    }
  };
};
