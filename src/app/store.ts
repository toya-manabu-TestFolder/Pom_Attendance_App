import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import registarSlice from "../features/registarSlice";
import confirmationSlice from "../features/confirmationSlice";
import homeSlice from "../features/homeSlice";
import DayScheduleSlice from "../features/DayScheduleSlice";
import MonthScheduleSlice from "../features/MonthScheduleSlice";
import OuthEditSlice from "../features/OuthEditSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    registar: registarSlice,
    confirmation: confirmationSlice,
    home: homeSlice,
    DaySchedule: DayScheduleSlice,
    MonthSchedule: MonthScheduleSlice,
    OuthEditSlice: OuthEditSlice,
  },
});
