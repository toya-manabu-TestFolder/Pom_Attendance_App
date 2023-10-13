import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  MonthSchedule: {
    selectMonth: string;
    startDay: string;
    lastDay: string;
    MonthAttendList: any[];
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
      state.allAtttendData = action.payload.AttendEveryData;
      const MonthAttendData = action.payload.MonthAttendData;
      function setApprovalState(req: boolean, res: boolean) {
        if (res) return "承認済み";
        if (req) return "申請中";
        return "なし";
      }
      function trimEndZero(time: string) {
        return time === undefined ? "" : time.slice(0, 5);
      }
      const MonthAttendList = MonthAttendData.map((data: any) => {
        return {
          選択: data.selected,
          日付: data.date.slice(5).replace("-", "/"),
          曜日: data.DayOfWeek,
          種類: data.DayType,
          登録: data.regist_state,
          承認: setApprovalState(
            data.approvel_request_state,
            data.approvel_state
          ),
          シフト: data.attendance_type,
          出次: data.attendance_state,
          開始: trimEndZero(data.start_time),
          終了: trimEndZero(data.end_time),
          休憩: trimEndZero(data.break_time),
          残業: trimEndZero(data.over_time),
          遅早: trimEndZero(data.lose_time),
          時有給: trimEndZero(data.paid_time),
          休出: data.attendance_type === "休日出勤" ? "あり" : "なし",
          コメント: data.comment,
        };
      });
      state.MonthAttendList = MonthAttendList;
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
    changeSelect: (state, action) => {},
  },
});
export const MonthScheduleState = (state: Props) => state.MonthSchedule;
export const MonthScheduleReducers = MonthScheduleSlice.actions;
export default MonthScheduleSlice.reducer;
