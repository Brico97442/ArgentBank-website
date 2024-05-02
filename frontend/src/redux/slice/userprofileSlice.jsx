import { createSlice } from "@reduxjs/toolkit";


const userprofileSlice = createSlice({
  name: "user",

  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
  },

  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.body.firstName
      state.lastName = action.payload.body.lastName
      state.userName = action.payload.body.userName
      state.email = action.payload.body.email
    },
    
    changeUserName: (state,action) =>{
      state.userName = action.payload
    },
    
  },
});


export const { setProfile, changeUserName } = userprofileSlice.actions
export default userprofileSlice.reducer;
