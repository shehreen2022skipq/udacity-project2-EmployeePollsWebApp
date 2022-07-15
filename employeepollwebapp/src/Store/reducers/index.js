import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./login-slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: { auth: authReducer, user: userReducer },
});

export default store;