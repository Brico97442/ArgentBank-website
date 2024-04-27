import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null, //  Initialise token par défault avec valeur getToken()
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
    },
    // foncion pour la déconnexion
    setSignOut(state) {
      state.token = null; 
      state.isConnected = false;
    },
  },
});

export const { setSignIn, setSignOut } = loginSlice.actions
export default loginSlice.reducer