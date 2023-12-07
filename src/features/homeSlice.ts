import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HomeSliceType } from "../types/types";
const API_URL = import.meta.env.VITE_API_URL;

type Props = HomeSliceType;

export const getUserAttendData: any = createAsyncThunk(
  "homeSlice/getUserAttendData",
  async () => {
    const result = await axios.get(`${API_URL}HomeApi/getUserAttendData`, {
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
    userRegistData: [
      {
        title: "登録承認状況",
        body: "",
      },
      { title: "有給取得状況", body: "" },
      { title: "出勤予定時間", body: "" },
      { title: "退勤予定時間", body: "" },
    ],
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAttendData.fulfilled, (state, action) => {
      const Status = action.payload.status;
      if (Status) {
        state.userPaidData = action.payload.paidData;
        state.userRegistData = action.payload.attendData;
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
