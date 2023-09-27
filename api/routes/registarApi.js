import express, { response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import bcrypt from "bcrypt"; // ハッシュ化ライブラリ
import { checkSchema, validationResult } from "express-validator";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;

const regisatrRouter = express.Router();

regisatrRouter.post(
  "/",
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: "※ 入力内容がありません!!",
      },
    },
    furigana: {
      matches: {
        options: "^[ァ-ンヴーs 　]*$",
        errorMessage: "※ カタカナで入力してください!!",
      },
      notEmpty: {
        errorMessage: "※ 入力内容がありません!!",
      },
    },
    gender_id: {
      custom: {
        if: (value) => {
          if (value === "") return true;
        },
        errorMessage: "※ 選択されていません!!",
      },
    },
    birthday: {
      isISO8601: {
        errorMessage: "※ 入力内容に誤りがあります!!",
      },
      notEmpty: {
        errorMessage: "※ 入力内容がありません!!",
      },
    },
    mailaddress: {
      isEmail: {
        errorMessage: "※ メールアドレスを記入してください!!",
      },
      notEmpty: {
        errorMessage: "※ 入力内容がありません!!",
      },
    },
    password: {
      matches: {
        options: "^(?=.*[0-9])(?=.*[a-z])[a-z0-9]{8,24}$",
        errorMessage: "※ 8文字以上24文字以内の半角英数字を入力してください!!",
      },
      notEmpty: {
        errorMessage: "※ 入力内容がありません!!",
      },
    },
    configrationPass: {
      custom: {
        // ifを使うなら、OKだったら何を返すか記述する。
        if: (value, { req }) => {
          if (value !== req.body.password) return true;
        },
        errorMessage: "※ パスワードが一致しません‼",
      },
    },
  }),
  async (req, res) => {
    const errors = validationResult(req).array();
    await axios
      .get(`${SUPABASE_URL}users?mailaddress=eq.${req.body.mailaddress}`, {
        headers: {
          apikey: `${API_KEY}`,
        },
      })
      .then((res) => {
        if (res.data.length) {
          const emailError = {
            msg: "※ 既に登録済みのメールアドレスです‼",
            path: "mailaddress",
          };
          errors.push(emailError);
        }
      });
    if (errors.length) {
      res.status(400).json({ errors: errors });
    } else {
      res.json("OK");
    }
  }
);

regisatrRouter.post("/regist", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  try {
    await axios.post(`${SUPABASE_URL}users`, req.body, {
      headers: {
        apikey: `${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    await axios
      .get(
        `${SUPABASE_URL}users?mailaddress=eq.${req.body.mailaddress}&select=id`,
        {
          headers: {
            apikey: `${API_KEY}`,
          },
        }
      )
      .then(async (res) => {
        const toDay = new Date();
        const Year = toDay.getFullYear();
        const Month = "0" + (toDay.getMonth() + 1);
        const date = "0" + toDay.getDate();

        const sendPaidData = {
          user_id: res.data[0].id,
          remaining_paiddays: 0,
          remaining_psidtime: 0,
          consumption_time: 80,
          give_lastday: `${
            Year + "-" + Month.slice(-2) + "-" + date.slice(-2)
          }`,
        };
        await axios.post(`${SUPABASE_URL}users_paid`, sendPaidData, {
          headers: {
            apikey: `${API_KEY}`,
            "Content-Type": "application/json",
          },
        });
      });

    res.status(200).json();
  } catch (error) {
    res.status(400).json();
  }
});
export default regisatrRouter;
