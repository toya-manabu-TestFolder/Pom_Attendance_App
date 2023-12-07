import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import session from "express-session";
import { Session } from "express-session";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const HomeRouter = express.Router();

HomeRouter.get("/getUserAttendData", async (req, res) => {
  const Year = new Date().getFullYear();
  const Month = new Date().getMonth() + 1;
  const Day = new Date().toString().slice(8, 10);
  const toDay = `${Year}-${Month}-${Day}`;

  try {
    const result = await axios.get(
      `${SUPABASE_URL}users?select=day_attendance(regist_state,start_time,end_time,approvel_request_state,approvel_state,paid_time),users_paid(all_have_days,all_heve_time,consumption_days,consumption_time)&id=eq.${req.session.userID}&day_attendance.date=eq.${toDay}`,
      {
        headers: {
          apikey: `${API_KEY}`,
        },
      }
    );
    const PaidData = result.data[0].users_paid;
    PaidData["remaind_days"] =
      PaidData.all_have_days - PaidData.consumption_days;

    const DayAttendace = result.data[0].day_attendance[0];
    const setAttendDataBody = (DayAttendace, title) => {
      if (!DayAttendace) return "登録なし";

      if (title === "登録承認状況") {
        if (DayAttendace.approvel_request_state) return "承認申請済み";
        if (DayAttendace.approvel_state) return "承認済み";
        return "登録済み";
      }

      if (title === "有給取得状況") {
        if (DayAttendace.paid_time === "00:00:00") return "有給取得なし";
        if (DayAttendace.paid_time === "08:00:00") return "一日有給取得";
        return "時間有給取得";
      }

      if (title === "出勤予定時間") return DayAttendace.start_time.slice(0, 5);
      if (title === "退勤予定時間") return DayAttendace.end_time.slice(0, 5);
    };

    const AttendData = [
      {
        title: "登録承認状況",
        body: setAttendDataBody(DayAttendace, "登録承認状況"),
      },
      {
        title: "有給取得状況",
        body: setAttendDataBody(DayAttendace, "有給取得状況"),
      },
      {
        title: "出勤予定時間",
        body: setAttendDataBody(DayAttendace, "出勤予定時間"),
      },
      {
        title: "退勤予定時間",
        body: setAttendDataBody(DayAttendace, "退勤予定時間"),
      },
    ];

    res.json({
      status: true,
      paidData: PaidData,
      attendData: AttendData,
    });
  } catch (error) {
    res.json({ status: false, errorData: error });
  }
});

HomeRouter.get("/getEmail", async (req, res) => {
  try {
    const result = await axios.get(
      `${SUPABASE_URL}users?id=eq.${req.session.userID}&select=mailaddress`,
      {
        headers: {
          apikey: `${API_KEY}`,
        },
      }
    );
    res.json({
      status: true,
      Email: result.data[0].mailaddress,
    });
  } catch (error) {
    res.json({ status: false, Email: "" });
  }
});

export default HomeRouter;
