import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import usersSlice from "../features/usersSlice";
import registarSlice from "../features/registarSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    registar: registarSlice,
  },
});
