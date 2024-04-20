import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const getToken = () => {
//   return localStorage.getItem("authToken") || null;
// };

// const initialState = {
//   token: getToken(),
// };

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (userCredentials) => {
//     const request = await axios.post(
//       "http://localhost:3001/api/v1/user/login",
//       userCredentials
//     );
//     const response = await request.data;
//     localStorage.setItem("user", JSON.stringify(response));
//     return response;
//   }
// );

const userProfileSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
  },

  reducers: {
    SetProfile: (state, action) => {
      state.firstName = action.payload.body.fisrtName
      state.lastName = action.payload.body.lastName
      state.userName = action.payload.body.userName
      state.email = action.payload.body.email
    },
    changeUserName: (state,action) =>{
      state.userName = action.payload
    },
  },
});


export const { setProfile, changeUserName } = userProfileSlice.actions
export default userProfileSlice.reducer;
