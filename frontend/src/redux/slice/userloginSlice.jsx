import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isConnected: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    // utilisateur connecté
    setSignIn(state, action) {
      state.isConnected = true;
      state.token = action.payload.token; // màj token
    },
    // déconnexion
    setSignOut(state) {
      state.isConnected = false;
      state.token = null;
    },
  },
});

export const { setSignIn, setSignOut } = loginSlice.actions;
export default loginSlice.reducer;
