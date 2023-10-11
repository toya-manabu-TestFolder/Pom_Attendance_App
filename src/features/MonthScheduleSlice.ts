import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  MonthSchedule: {
    selectMonth: string;
    startDay: string;
    lastDay: string;
    MonthAttendList: any;
    allAtttendData: {
      data: string | number;
      出勤日数: number;
      欠勤日数: number;
      休出日数: number;
      特休日数: number;
      代休日数: number;
      有給取得日数: number;
      有給取得時間: string;
      遅早時間: string;
      残業時間: string;
    };
  };
};

export const getMonthAttendanceData: any = createAsyncThunk(
  "MonthSchedule/getMonthAttendanceData",
  async (data) => {
    const result = await axios.post(
      `${API_URL}MonthScheduleApi/getMonthAttendanceData`,
      data,
      {
        withCredentials: true,
      }
    );
    return result.data;
  }
);

const MonthScheduleSlice = createSlice({
  name: "MonthSchedule",
  initialState: {
    selectMonth: "",
    startDay: "",
    lastDay: "",
    MonthAttendList: [],
    allAtttendData: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getMonthAttendanceData.fulfilled, (state, action) => {
      state.selectMonth = action.payload.DateData.SelectYearMonth;
      state.startDay = action.payload.DateData.SatrtDay;
      state.lastDay = action.payload.DateData.LastDay;
      state.MonthAttendList = action.payload.MonthAttendData;
      state.allAtttendData = action.payload.AttendEveryData;
    });
  },
  reducers: {
    startSetState: (state, action) => {
      state.selectMonth = action.payload.yearMonth;
      state.startDay = action.payload.startDay;
      state.lastDay = action.payload.lastDay;
    },
    changeMonth: (state, action) => {
      state.selectMonth = action.payload;
    },
  },
});
export const MonthScheduleState = (state: Props) => state.MonthSchedule;
export const MonthScheduleReducers = MonthScheduleSlice.actions;
export default MonthScheduleSlice.reducer;
