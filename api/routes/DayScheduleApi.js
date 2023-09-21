import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;

const DayScheduleRouter = express.Router();

DayScheduleRouter.post("/getDayAttendanceData", async (req, res) => {
  try {
    const result = await axios.get(
      `${SUPABASE_URL}day_attendance?user_id=eq.${req.body.userId}&date=eq.${req.body.toDay}`,
      {
        headers: {
          apikey: `${API_KEY}`,
        },
      }
    );
    res.json({ data: result.data, status: result.status });
  } catch (error) {
    res.json({ data: "", status: error.response.status });
  }
});

DayScheduleRouter.post("/registDayAttendData", async (req, res) => {
  req.body["regist_state"] = "登録済み";
  try {
    await axios.post(`${SUPABASE_URL}day_attendance`, req.body, {
      headers: {
        apikey: `${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    res.json({
      data: req.body,
      status: 200,
    });
  } catch (error) {
    res.json({
      data: "",
      status: 400,
    });
  }
});

DayScheduleRouter.post("/updateDayAttendData", async (req, res) => {
  try {
    await axios
      .get(
        `${SUPABASE_URL}day_attendance?user_id=eq.${req.body.user_id}&date=eq.${req.body.date}&select=id`,
        {
          headers: {
            apikey: `${API_KEY}`,
          },
        }
      )
      .then(async (data) => {
        req.body["id"] = `${data.data[0].id}`;
        await axios.put(
          `${SUPABASE_URL}day_attendance?id=eq.${data.data[0].id}`,
          req.body,
          {
            headers: {
              apikey: `${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
      });
    res.json({
      data: req.body,
      status: 200,
    });
  } catch (error) {
    res.json({
      data: "",
      status: 400,
    });
  }
});

DayScheduleRouter.post("/approvalRequestDayAttendData", async (req, res) => {
  req.body["approvel_request_state"] = true;
  try {
    await axios.post(`${SUPABASE_URL}approval_request`, req.body, {
      headers: {
        apikey: `${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    await axios
      .get(
        `${SUPABASE_URL}day_attendance?user_id=eq.${req.body.user_id}&date=eq.${req.body.date}&select=id`,
        {
          headers: {
            apikey: `${API_KEY}`,
          },
        }
      )
      .then(async (data) => {
        req.body["id"] = `${data.data[0].id}`;
        await axios.put(
          `${SUPABASE_URL}day_attendance?id=eq.${data.data[0].id}`,
          req.body,
          {
            headers: {
              apikey: `${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
      });
    res.json({
      data: req.body,
      status: 200,
    });
  } catch (error) {
    res.json({
      data: "",
      status: 400,
    });
  }
});

export default DayScheduleRouter;
