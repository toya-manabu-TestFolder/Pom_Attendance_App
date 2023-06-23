import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const HomeRouter = express.Router();

HomeRouter.get("/getUserPaidData", async (req, res) => {
  try {
    const result = await axios.get(
      `${SUPABASE_URL}users_paid?user_id=eq.${req.session.userID}`,
      {
        headers: {
          apikey: `${API_KEY}`,
        },
      }
    );
    res.json({
      status: true,
      paidData: result.data,
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
