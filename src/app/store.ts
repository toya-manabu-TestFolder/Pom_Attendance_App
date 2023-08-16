import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import registarSlice from "../features/registarSlice";
import confirmationSlice from "../features/confirmationSlice";
import homeSlice from "../features/homeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    registar: registarSlice,
    confirmation: confirmationSlice,
    home: homeSlice,
  },
});
