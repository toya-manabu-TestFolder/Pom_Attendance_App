import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = import.meta.env.VITE_API_URL;

type Props = {
  MonthSchedule: {
    selectMonth: string;
    startDay: string;
    lastDay: string;
    MonthAttendList: [
      {
        選択: boolean;
        日付: string;
        曜日: string;
        種類: string;
        登録: string;
        承認: string;
        シフト: string;
        出次: string;
        開始: string;
        終了: string;
        休憩: string;
        残業: string;
        遅早: string;
        時有給: string;
        休出: string;
        コメント: string;
      }
    ];
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
    uuid: {
      month_data_ul: string[];
    };
    bundleRegistError: {
      openToggle: boolean;
      message: string;
    };
    selectDays: string[];
    toggleCommentModal: {
      toggle: boolean;
      comment: string;
    };
    bundleApplovalRecuest: {
      modalToggle: boolean;
      selectDays: string[];
      error: boolean;
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

export const postBundleApplovalRecuest: any = createAsyncThunk(
  "MonthSchedule/postBundleApplovalRecuest",
  async (data) => {
    const result = await axios.post(
      `${API_URL}MonthScheduleApi/postBundleApplovalRecuest`,
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
    MonthAttendList: [
      {
        選択: false,
        日付: "",
        曜日: "",
        種類: "",
        登録: "",
        承認: "",
        シフト: "",
        出次: "",
        開始: "",
        終了: "",
        休憩: "",
        残業: "",
        遅早: "",
        時有給: "",
        休出: "",
        コメント: "",
      },
    ],
    allAtttendData: {},
    uuid: { month_data_ul: [""] },
    bundleRegistError: {
      openToggle: false,
      message: "",
    },
    selectDays: [""],
    toggleCommentModal: {
      toggle: false,
      comment: "",
    },
    bundleApplovalRecuest: {
      modalToggle: false,
      selectDays: [""],
      error: false,
    },
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

      const newUuidArr = {
        month_data_ul: [""],
      };
      for (let i = 0; i < MonthAttendList.length; i++) {
        newUuidArr.month_data_ul.unshift(uuidv4());
      }
      state.uuid = newUuidArr;
    });
    builder.addCase(postBundleApplovalRecuest.fulfilled, (state, action) => {
      if (!action.payload.status) {
        state.bundleApplovalRecuest.error = true;
      }
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
    changeSelect: (state, action) => {
      state.MonthAttendList[action.payload[1]].選択 = action.payload[0];
    },
    bundleSelect: (state, action) => {
      console.log(action.payload);
      state.MonthAttendList.map((data) => {
        if (data.選択) data.選択 = false;
      });
      if (action.payload === "登録") {
        state.MonthAttendList.map((data) => {
          if (data.登録 === "登録なし" && data.種類 === "平日")
            data.選択 = true;
        });
      }

      if (action.payload === "承認") {
        state.MonthAttendList.map((data) => {
          if (data.承認 === "なし" && data.登録 === "登録済み")
            data.選択 = true;
        });
      }
    },
    bundleAttendEdit: (state, action) => {
      const selectDays = [];
      const slectedResult = state.MonthAttendList.some((data) => data.選択);
      if (!slectedResult) {
        state.bundleRegistError.message = "日付が選択されていません！！";
        state.bundleRegistError.openToggle = true;
        return;
      }

      for (const data of state.MonthAttendList) {
        if (data.選択 && data.登録 === "登録済み") {
          state.bundleRegistError.message =
            "登録済みの日付が選択されています！！";
          state.bundleRegistError.openToggle = true;
          return;
        }

        if (data.選択) {
          const Year = new Date(state.selectMonth).getFullYear();
          const ConvertDate = `${Year}-${data.日付.replace("/", "-")}`;
          selectDays.push(ConvertDate);
        }
      }
      state.selectDays = selectDays;
      action.payload = true;
    },
    ToggleCommentModal: (state, action) => {
      state.toggleCommentModal = action.payload;
    },
    BundleApplovalRecuest: (state, action) => {
      const slectedResult = state.MonthAttendList.some((data) => data.選択);
      let selectDays = [];
      if (!slectedResult) {
        state.bundleRegistError.message = "日付が選択されていません！！";
        state.bundleRegistError.openToggle = true;
        return;
      }

      for (const data of state.MonthAttendList) {
        if (data.選択 && data.登録 === "登録なし") {
          state.bundleRegistError.message =
            "登録なしの日付が選択されています！！";
          state.bundleRegistError.openToggle = true;
          return;
        }

        if (data.選択 && data.承認 === "申請中") {
          state.bundleRegistError.message =
            "申請中の日付が選択されています！！";
          state.bundleRegistError.openToggle = true;
          return;
        }

        if (data.選択 && data.承認 === "承認済み") {
          state.bundleRegistError.message =
            "申請中の日付が選択されています！！";
          state.bundleRegistError.openToggle = true;
          return;
        }

        if (data.選択) {
          let day = `${state.selectMonth}-${data.日付.slice(3)}`;
          selectDays.push(day);
          state.bundleApplovalRecuest.selectDays = selectDays;
        }
      }

      state.bundleApplovalRecuest.modalToggle = action.payload;
    },
    closeModal: (state) => {
      state.bundleApplovalRecuest.modalToggle = false;
      state.bundleRegistError.openToggle = false;
      state.bundleRegistError.message = "";
    },
  },
});
export const MonthScheduleState = (state: Props) => state.MonthSchedule;
export const MonthScheduleReducers = MonthScheduleSlice.actions;
export default MonthScheduleSlice.reducer;
