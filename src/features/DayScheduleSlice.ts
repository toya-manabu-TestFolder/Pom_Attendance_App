import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getDayAttendanceData: any = createAsyncThunk(
  "DaySchedule/getDayAttendanceData",
  async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}DayScheduleApi/getDayAttendanceData`,
        data
      );
      // response.dataとすることで、返ってきた値をreducerでaction.payloadとして扱える。;
      return response.data;
    } catch (error: any) {
      return { message: "通信に失敗しました！！" };
    }
  }
);

type Props = {
  DaySchedule: {
    DayAttendanceData: {
      id: string;
      date: string;
      regist_state: string;
      attendance_type: string;
      default_start_time: string;
      default_end_time: string;
      start_time: string;
      end_time: string;
      attendance_state: string;
      paid_time: string;
      break_time: string;
      lose_time: string;
      over_time: string;
      comment: string;
    };
  };
};

const DayScheduleSlice = createSlice({
  name: "DaySchedule",
  initialState: {
    DayAttendanceData: {
      id: "",
      date: "",
      regist_state: "登録なし",
      attendance_type: "通常業務",
      default_start_time: "09:00:00",
      default_end_time: "18:00:00",
      start_time: "09:00:00",
      end_time: "18:00:00",
      attendance_state: "出勤",
      paid_time: "00:00:00",
      break_time: "00:00:00",
      lose_time: "00:00:00",
      over_time: "00:00:00",
      comment: "",
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDayAttendanceData.fulfilled, (state, action) => {
      const DayAttendanceData = state.DayAttendanceData;
      const inportData = action.payload[0];
      if (action.payload.length) {
        DayAttendanceData.id = inportData.id;
        DayAttendanceData.date = inportData.date;
        DayAttendanceData.regist_state = inportData.regist_state;
        DayAttendanceData.attendance_type = inportData.attendance_type;
        DayAttendanceData.default_start_time = inportData.default_start_time;
        DayAttendanceData.default_end_time = inportData.default_end_time;
        DayAttendanceData.start_time = inportData.start_time;
        DayAttendanceData.end_time = inportData.end_time;
        DayAttendanceData.attendance_state = inportData.attendance_state;
        DayAttendanceData.paid_time = inportData.paid_time;
        DayAttendanceData.break_time = inportData.break_time;
        DayAttendanceData.lose_time = inportData.lose_time;
        DayAttendanceData.over_time = inportData.over_time;
        DayAttendanceData.comment = inportData.comment;
      } else {
        DayAttendanceData.id = action.meta.arg.userId;
        DayAttendanceData.date = action.meta.arg.toDaya;
      }
    });
  },
  reducers: {
    selectDay: (state, action) => {
      state.DayAttendanceData.date = action.payload;
    },
    setShiftType: (state, action) => {
      state.DayAttendanceData.attendance_type = action.payload;
    },
    setShiftStartTime: (state, action) => {
      state.DayAttendanceData.default_start_time = action.payload;
    },
    setShiftEndTime: (state, action) => {
      state.DayAttendanceData.default_end_time = action.payload;
    },
    setAttendStartTime: (state, action) => {
      state.DayAttendanceData.start_time = action.payload;
    },
    setAttendEndTime: (state, action) => {
      state.DayAttendanceData.end_time = action.payload;
    },
    setAttendState: (state, action) => {
      state.DayAttendanceData.attendance_state = action.payload;
    },
    setPaidTime: (state, action) => {
      state.DayAttendanceData.paid_time = action.payload;
    },
    setBreakTime: (state, action) => {
      state.DayAttendanceData.break_time = action.payload;
    },
    setComment: (state, action) => {
      state.DayAttendanceData.comment = action.payload;
    },
  },
});
export const State = (state: Props) => state.DaySchedule;
export const Reducer = DayScheduleSlice.actions;
export default DayScheduleSlice.reducer;
