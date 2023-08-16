import express from "express";
import axios from "axios";
// dontenvはexpress上でenvファイルを読み込むモジュール。
import dotenv from "dotenv";
dotenv.config();
// viteだとinport.meta.envだがexpressだとprocess.env
const API_KEY = process.env.VITE_API_KEY;

const authRouter = express.Router();

authRouter.get("/", async (req, res) => {
  const user = await axios
    .get("https://blltumbexweiimidgyhd.supabase.co/rest/v1/users", {
      headers: {
        apikey: `${API_KEY}`,
      },
    })
    .then((res) => res.data);
  res.json(user);
});

authRouter.post("/", async (req, res) => {
  const users = await axios
    .get("https://blltumbexweiimidgyhd.supabase.co/rest/v1/users", {
      headers: {
        apikey: `${API_KEY}`,
      },
    })
    .then((res) => res.data);
  const result = users.some(
    (user) =>
      user.mailaddress === req.body.mailaddress &&
      user.password === req.body.password
  );
  if (result) {
    res.status(200).json();
  } else {
    res.status(400).json();
  }
});

export default authRouter;
