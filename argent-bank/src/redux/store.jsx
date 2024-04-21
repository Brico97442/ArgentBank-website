import { configureStore } from "@reduxjs/toolkit";
import {default as loginReducer} from "./slice/userloginSlice";
import {default as userReducer} from "./slice/userprofileSlice";

const Store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});

export default Store;
