import axios from "axios";
import { setSignIn } from "../slice/userloginSlice";

export const login = (email, password) => {
  return async (dispatch) => {
    const formData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const responseData = response.data;
        const token = responseData.body.token;
        dispatch(setSignIn({ token }));
      } else {
        const errorMessage = response.data;
        throw new Error(errorMessage.message);
      }
    } catch (error) {
      throw new Error("An error has occurred.");
    }
  };
};
