import express from "express";
import axios from "axios";
import bcrypt from "bcrypt";

// dontenvはexpress上でenvファイルを読み込むモジュール。
import dotenv from "dotenv";
dotenv.config();
// viteだとinport.meta.envだがexpressだとprocess.env
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;

const authRouter = express.Router();

authRouter.post("/", async (req, res) => {
  const user = await axios.get(
    `${SUPABASE_URL}users?mailaddress=eq.${req.body.mailaddress}`,
    {
      headers: {
        apikey: `${API_KEY}`,
      },
    }
  );
  if (!user.data.length) return res.json({ status: 400 });
  bcrypt.compare(
    req.body.password,
    user.data[0].password,
    async (err, result) => {
      if (result) {
        req.session.userID = user.data[0].id;
        res
          .cookie("LoginUser", `${user.data[0].name}`, {
            secure: true,
          })

          .json({
            status: 200,
          });
      } else {
        res.json({ status: 400 });
      }
    }
  );
});

authRouter.get("/logout", async (req, res) => {
  req.session.destroy();
  res.json();
});
export default authRouter;
