import express from "express";
import cookieParser from "cookie-parser";
import axios from "axios";
// dontenvはexpress上でenvファイルを読み込むモジュール。
import dotenv from "dotenv";
dotenv.config();
// viteだとinport.meta.envだがexpressだとprocess.env
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;

const authRouter = express.Router();

authRouter.post("/", async (req, res) => {
  const user = await axios.get(
    `https://blltumbexweiimidgyhd.supabase.co/rest/v1/users?mailaddress=eq.${req.body.mailaddress}&password=eq.${req.body.password}`,
    {
      headers: {
        apikey: `${API_KEY}`,
      },
    }
  );
  if (user.data.length) {
    res
      .status(200)
      .cookie("userId", `${user.data[0].id}`)
      .cookie("userName", `${user.data[0].name}`)
      .json();
  } else {
    res.status(400).json();
  }
});

export default authRouter;
