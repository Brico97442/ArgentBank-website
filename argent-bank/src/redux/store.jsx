import { configureStore } from "@reduxjs/toolkit";
import {default as userReducer} from "./slice/UserProfileSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
