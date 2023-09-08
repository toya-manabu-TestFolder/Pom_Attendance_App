import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;

const DayScheduleRouter = express.Router();

DayScheduleRouter.post("/getDayAttendanceData", async (req, res) => {
  const dayAttendance = await axios
    .get(
      `${SUPABASE_URL}day_attendance?id=eq.${req.body.userId}&date=eq.${req.body.toDay}`,
      {
        headers: {
          apikey: `${API_KEY}`,
        },
      }
    )
    .then((res) => res.data);
  res.json(dayAttendance);
});

// authRouter.post("/", async (req, res) => {
//   const users = await axios
//     .get("https://blltumbexweiimidgyhd.supabase.co/rest/v1/users", {
//       headers: {
//         apikey: `${API_KEY}`,
//       },
//     })
//     .then((res) => res.data);
//   const result = users.some(
//     (user) =>
//       user.mailaddress === req.body.mailaddress &&
//       user.password === req.body.password
//   );
//   if (result) {
//     res.status(200).json();
//   } else {
//     res.status(400).json();
//   }
// });

export default DayScheduleRouter;
