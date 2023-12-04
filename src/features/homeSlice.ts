import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HomeSliceType } from "../types/types";
const API_URL = import.meta.env.VITE_API_URL;

type Props = HomeSliceType;

export const getUserPaidData: any = createAsyncThunk(
  "homeSlice/getUserPaidData",
  async () => {
    const result = await axios.get(`${API_URL}HomeApi/getUserPaidData`, {
      withCredentials: true,
    });
    return result.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    toDay: "",
    startButtonDesable: false,
    toggleLoading: false,
    CompletedModalState: {
      toggleModal: false,
      message: "",
    },
    ErrorModalState: {
      toggleModal: false,
      message: "",
    },
    userPaidData: {
      all_heve_time: 0,
      remaind_days: 0,
      all_have_days: 0,
      consumption_days: 0,
      consumption_time: 0,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserPaidData.fulfilled, (state, action) => {
      const Status = action.payload.status;
      const PaidData = action.payload.paidData[0];
      if (Status) {
        state.userPaidData.all_have_days = PaidData.all_have_days;
        state.userPaidData.all_heve_time = PaidData.all_heve_time;
        state.userPaidData.consumption_days = PaidData.consumption_days;
        state.userPaidData.consumption_time = PaidData.consumption_time;
        state.userPaidData.remaind_days =
          PaidData.all_have_days - PaidData.consumption_days;
      }
    });
  },
  reducers: {
    setToDay: (state, action) => {
      const toDay = new Date();
      const Year = toDay.getFullYear();
      const Month = "0" + (toDay.getMonth() + 1);
      const date = "0" + toDay.getDate();
      state.toDay = `${Year + "-" + Month.slice(-2) + "-" + date.slice(-2)}`;
      action.payload = `${Year + "-" + Month.slice(-2) + "-" + date.slice(-2)}`;
    },
    startOkFn: (state) => {
      state.startButtonDesable = true;
    },
    toggleLoading: (state, action) => {
      state.toggleLoading = action.payload;
    },
    toggleCompletedModal: (state, action) => {
      state.CompletedModalState.message = action.payload.message;
      state.CompletedModalState.toggleModal = action.payload.toggleModal;
    },
    toggleErrorModal: (state, action) => {
      state.ErrorModalState.message = action.payload.message;
      state.ErrorModalState.toggleModal = action.payload.toggleModal;
    },
  },
});
export const Stats = (state: Props) => state.home;
export const homeSliceReducers = homeSlice.actions;
export default homeSlice.reducer;
