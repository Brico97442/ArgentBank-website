import { createSlice } from "@reduxjs/toolkit";

const getToken = () => {
  return localStorage.getItem("loginToken") || null;
};
const initialState = {
  token: getToken(), // Init token avec valeur getToken()
  isConnected: false, // Init par défaut
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // fonction pour connexion
    setSignIn(state, action) {
      state.token = action.payload.token; // màj token
      state.isConnected = true;
      localStorage.getItem("localStorage authToken", state.token);
    },
    // foncion pour la déconnexion
    setSignOut(state) {
      state.token = null; 
      state.isConnected = false;
      localStorage.removeItem("loginToken");
    },
  },
});

export const { setSignIn, setSignOut } = loginSlice.actions
export default loginSlice.reducer