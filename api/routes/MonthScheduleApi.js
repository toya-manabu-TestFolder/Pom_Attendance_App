import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import JapaneseHolidays from "japanese-holidays";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;

const MonthScheduleRouter = express.Router();

MonthScheduleRouter.post("/getMonthAttendanceData", async (req, res) => {
  try {
    const MonthAttendData = await axios
      .get(
        `${SUPABASE_URL}day_attendance?user_id=eq.${req.session.userID}&date=gte.${req.body.startDay}&date=lte.${req.body.lastDay}&order=date`,
        {
          headers: {
            apikey: `${API_KEY}`,
          },
        }
      )
      .then((res) => {
        const resData = res.data;
        const monthAttendDataArray = [];
        const repeatNum = Number(req.body.lastDay.slice(8, 10));
        for (let i = 1; i <= repeatNum; i++) {
          const setDate = `${req.body.yearMonth}-${("0" + String(i)).slice(
            -2
          )}`;
          const DayOfWeekArr = ["日", "月", "火", "水", "木", "金", "土"];
          const DayOfWeek = DayOfWeekArr[new Date(setDate).getDay()];

          function DayType() {
            const Holiday = JapaneseHolidays.isHoliday(new Date(setDate));
            if (Holiday) return "祝日";

            const DayOfWeekNum = new Date(setDate).getDay();
            if (DayOfWeekNum === 6 || DayOfWeekNum === 0) return "休日";

            return "平日";
          }

          const filterRegitedData = resData.find((el) => el.date === setDate);
          if (filterRegitedData) {
            filterRegitedData["DayOfWeek"] = DayOfWeek;
            filterRegitedData["DayType"] = DayType();
            monthAttendDataArray.push(filterRegitedData);
            continue;
          }

          const DefaultAttendData = {
            user_id: req.session.userID,
            date: setDate,
            regist_state: "登録なし",
            selected: false,
            DayOfWeek: DayOfWeek,
            DayType: DayType(),
          };
          monthAttendDataArray.push(DefaultAttendData);
        }

        return monthAttendDataArray;
      });
    function GoingToWorkTotal(MonthAttendData) {
      let Count = 0;
      for (const data of MonthAttendData) {
        if (data.attendance_state === "出勤") Count++;
      }
      return Count;
    }
    function AbsenteeismTotal(MonthAttendData) {
      let Count = 0;
      for (const data of MonthAttendData) {
        if (data.attendance_state === "欠勤") Count++;
      }
      return Count;
    }
    function HolidayWorkTotal(MonthAttendData) {
      let Count = 0;
      for (const data of MonthAttendData) {
        if (data.attendance_type === "休日出勤") Count++;
      }
      return Count;
    }
    function SpecialHolidayTotal(MonthAttendData) {
      let Count = 0;
      for (const data of MonthAttendData) {
        if (data.attendance_type === "特別休暇") Count++;
      }
      return Count;
    }
    function SubHolidayTotal(MonthAttendData) {
      let Count = 0;
      for (const data of MonthAttendData) {
        if (data.attendance_type === "代休") Count++;
      }
      return Count;
    }
    function LoseTimeTotal(MonthAttendData) {
      let TotalTime = 0;
      for (const data of MonthAttendData) {
        if (data.lose_time) {
          const [Hour, Minute] = data.lose_time.split(":");
          const ConvertMinute = Number(Hour) * 60 + Number(Minute);
          TotalTime = TotalTime + ConvertMinute;
        }
      }
      const ConvertTime = `${("0" + Math.floor(TotalTime / 60)).slice(
        -2
      )}時間${("0" + (TotalTime % 60)).slice(-2)}分`;
      return ConvertTime;
    }
    function OverTimeTotal(MonthAttendData) {
      let TotalTime = 0;
      for (const data of MonthAttendData) {
        if (data.over_time) {
          const [Hour, Minute] = data.over_time.split(":");
          const ConvertMinute = Number(Hour) * 60 + Number(Minute);
          TotalTime = TotalTime + ConvertMinute;
        }
      }
      const ConvertTime = `${("0" + Math.floor(TotalTime / 60)).slice(
        -2
      )}時間${("0" + (TotalTime % 60)).slice(-2)}分`;
      return ConvertTime;
    }
    function PaidTimeTotal(MonthAttendData) {
      let TotalTime = 0;
      for (const data of MonthAttendData) {
        if (data.paid_time) {
          const [Hour, Minute] = data.paid_time.split(":");
          const ConvertMinute = Number(Hour) * 60 + Number(Minute);
          TotalTime = TotalTime + ConvertMinute;
        }
      }
      const ConvertTime = `${("0" + Math.floor(TotalTime / 60)).slice(
        -2
      )}時間${("0" + (TotalTime % 60)).slice(-2)}分`;
      return ConvertTime;
    }
    function PaidDayTotal(MonthAttendData) {
      let Count = 0;
      for (const data of MonthAttendData) {
        if (data.attendance_type === "有給休暇") Count++;
      }
      return Count;
    }
    res.json({
      DateData: {
        SelectYearMonth: req.body.yearMonth,
        SatrtDay: req.body.startDay,
        LastDay: req.body.lastDay,
      },
      MonthAttendData: MonthAttendData,
      AttendEveryData: {
        出勤日数: GoingToWorkTotal(MonthAttendData),
        欠勤日数: AbsenteeismTotal(MonthAttendData),
        休出日数: HolidayWorkTotal(MonthAttendData),
        特休日数: SpecialHolidayTotal(MonthAttendData),
        代休日数: SubHolidayTotal(MonthAttendData),
        有給取得日数: PaidDayTotal(MonthAttendData),
        有給取得時間: PaidTimeTotal(MonthAttendData),
        遅早時間: LoseTimeTotal(MonthAttendData),
        残業時間: OverTimeTotal(MonthAttendData),
      },
      status: 200,
    });
  } catch (error) {
    res.json({ status: error.response.status });
  }
});

export default MonthScheduleRouter;
