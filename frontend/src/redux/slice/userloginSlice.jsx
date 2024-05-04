import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isConnected: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {

    setSignIn(state, action) {
      state.isConnected = true;
      state.token = action.payload.token;
    },

    setSignOut(state) {
      state.isConnected = false;
      state.token = null;
    },
  },
});

export const { setSignIn, setSignOut } = loginSlice.actions;
export default loginSlice.reducer;
