import { createSlice } from "@reduxjs/toolkit";

const getToken = () => {
  return localStorage.getItem("loginToken") || null; //stock le token sous le nom de login token 
};

const initialState = {
  token: getToken(), //  Initialise token par défault avec valeur getToken()
  isConnected: false, // Initialise que l'utilisateur n'est pas connecté par défaut 
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // fonction pour connexion
    setSignIn(state, action) {
      state.token = action.payload.token; // màj token
      state.isConnected = true;
      localStorage.getItem("localStorage loginToken", state.token);
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