import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DayScheduleTypes } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  DaySchedule: {
    resetDayAttendanceData: DayScheduleTypes["DayAttendanceDataType"];
    defaultDayAttendanceData: DayScheduleTypes["DayAttendanceDataType"];
    editedDayAttendanceData: DayScheduleTypes["DayAttendanceDataType"];
    bundleAttendData: DayScheduleTypes["DayAttendanceDataType"][];
    canApprovalRequest: boolean;
    isError: boolean;
    errorMessage: string;
    errorOfBtnDisable: boolean;
  };
};

export const getDayAttendanceData: any = createAsyncThunk(
  "DaySchedule/getDayAttendanceData",
  async (data) => {
    const result = await axios.post(
      `${API_URL}DayScheduleApi/getDayAttendanceData`,
      data,
      {
        withCredentials: true,
      }
    );
    return result.data;
  }
);

export const registDayAttendData: any = createAsyncThunk(
  "DaySchedule/registDayAttendData",
  async (data) => {
    const result = await axios.post(
      `${API_URL}DayScheduleApi/registDayAttendData`,
      data,
      {
        withCredentials: true,
      }
    );
    return result.data;
  }
);

export const bundleRegist: any = createAsyncThunk(
  "DaySchedule/bundleRegist",
  async (data) => {
    const result = await axios.post(
      `${API_URL}DayScheduleApi/bundleRegist`,
      data,
      {
        withCredentials: true,
      }
    );
    return result.data;
  }
);

export const updateDayAttendData: any = createAsyncThunk(
  "DaySchedule/updateDayAttendData",
  async (data) => {
    const result = await axios.post(
      `${API_URL}DayScheduleApi/updateDayAttendData`,
      data,
      {
        withCredentials: true,
      }
    );
    return result.data;
  }
);

export const approvalRequestDayAttendData: any = createAsyncThunk(
  "DaySchedule/approvalRequestDayAttendData",
  async (data) => {
    const result = await axios.post(
      `${API_URL}DayScheduleApi/approvalRequestDayAttendData`,
      data,
      {
        withCredentials: true,
      }
    );
    return result.data;
  }
);

const DayScheduleSlice = createSlice({
  name: "DaySchedule",
  initialState: {
    resetDayAttendanceData: {
      date: "",
      approvel_request_state: false,
      approvel_state: false,
      regist_state: "登録なし",
      attendance_type: "通常業務",
      default_start_time: "09:00",
      default_end_time: "18:00",
      start_time: "09:00",
      end_time: "18:00",
      attendance_state: "出勤",
      paid_time: "00:00",
      break_time: "01:00",
      lose_time: "00:00",
      over_time: "00:00",
      total_time: "08:00",
      comment: "",
      selected: false,
    },
    editedDayAttendanceData: {
      date: "",
      approvel_request_state: false,
      approvel_state: false,
      regist_state: "登録なし",
      attendance_type: "通常業務",
      default_start_time: "09:00",
      default_end_time: "18:00",
      start_time: "09:00",
      end_time: "18:00",
      attendance_state: "出勤",
      paid_time: "00:00",
      break_time: "01:00",
      lose_time: "00:00",
      over_time: "00:00",
      total_time: "08:00",
      comment: "",
      selected: false,
    },

    canApprovalRequest: true,
    isError: false,
    errorOfBtnDisable: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getDayAttendanceData.fulfilled, (state, action) => {
      if (action.payload.status !== 200) {
        state.isError = true;
        state.errorOfBtnDisable = true;
        state.errorMessage = "通信エラーが発生しました。";
      }

      const inportData = action.payload.data[0];
      if (action.payload.data.length) {
        state.editedDayAttendanceData = inportData;
      } else {
        state.editedDayAttendanceData.date = action.meta.arg.toDay;
        state.resetDayAttendanceData.date = action.meta.arg.toDay;
        state.editedDayAttendanceData = state.resetDayAttendanceData;
      }
    });
    builder.addCase(registDayAttendData.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.editedDayAttendanceData = action.payload.data;
      } else {
        state.isError = true;
        state.errorMessage = "通信エラーが発生しました。";
      }
    });
    builder.addCase(updateDayAttendData.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.editedDayAttendanceData = action.payload.data;
      } else {
        state.isError = true;
        state.errorMessage = "通信エラーが発生しました。";
      }
    });
    builder.addCase(approvalRequestDayAttendData.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.editedDayAttendanceData = action.payload.data;
      } else {
        state.isError = true;
        state.errorMessage = "通信エラーが発生しました。";
      }
    });
    builder.addCase(bundleRegist.fulfilled, (state, action) => {
      if (action.payload.status !== 200) {
        state.isError = true;
        state.errorMessage = "通信エラーが発生しました。";
      }
    });
  },
  reducers: {
    selectDay: (state, action) => {
      state.editedDayAttendanceData.date = action.payload;
    },
    setShiftType: (state, action) => {
      state.editedDayAttendanceData.attendance_type = action.payload;
    },
    setShiftStartTime: (state, action) => {
      state.editedDayAttendanceData.default_start_time = action.payload;
    },
    setShiftEndTime: (state, action) => {
      state.editedDayAttendanceData.default_end_time = action.payload;
    },
    setAttendStartTime: (state, action) => {
      state.editedDayAttendanceData.start_time = action.payload;
    },
    setAttendEndTime: (state, action) => {
      state.editedDayAttendanceData.end_time = action.payload;
    },
    setAttendState: (state, action) => {
      state.editedDayAttendanceData.attendance_state = action.payload;
    },
    setPaidTime: (state, action) => {
      state.editedDayAttendanceData.paid_time = action.payload;
    },
    setBreakTime: (state, action) => {
      state.editedDayAttendanceData.break_time = action.payload;
    },
    setTotalTime: (state, action) => {
      state.editedDayAttendanceData.total_time = action.payload;
    },
    setComment: (state, action) => {
      state.editedDayAttendanceData.comment = action.payload;
    },
    setRegistState: (state, action) => {
      state.editedDayAttendanceData.regist_state =
        action.payload === "登録済み" ? "登録なし" : "登録済み";
    },
    setApprovalReqState: (state) => {
      state.editedDayAttendanceData.approvel_request_state = state
        .editedDayAttendanceData.approvel_request_state
        ? false
        : true;
    },
    openErrorModal: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    closeErrorModal: (state) => {
      state.isError = false;
      state.errorMessage = "";
    },
  },
});
export const State = (state: Props) => state.DaySchedule;
export const Reducer = DayScheduleSlice.actions;
export default DayScheduleSlice.reducer;
