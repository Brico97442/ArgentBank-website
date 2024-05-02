import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/userloginSlice";
import userReducer from "./slice/userprofileSlice";

const Store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});

export default Store;
