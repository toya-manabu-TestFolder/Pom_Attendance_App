import express from "express";
import axios from "axios";
import dotenv from "dotenv";
// bodyは
import { checkSchema, validationResult } from "express-validator";
dotenv.config();
const API_KEY = process.env.VITE_API_KEY;

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
        if: (value, { req }) => {
          if (value === 0) {
            return true;
          }
          return false;
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
          if (value !== req.body.password) {
            return true;
          }
          return false;
        },
        errorMessage: "※ パスワードが一致しません‼",
      },
    },
  }),
  async (req, res) => {
    const registarData = await req.body;
    const errors = validationResult(req);

    !errors.isEmpty()
      ? res.status(400).json({ errors: errors.array() })
      : (await isAlreadyEmail(registarData.mailaddress))
      ? res.status(400).json("既に登録済みのメールアドレスです！！")
      : res.json("OK");
  }
);

async function isAlreadyEmail(reqEmail) {
  const EmailAddressAry = await axios.get(
    "https://blltumbexweiimidgyhd.supabase.co/rest/v1/users?select=mailaddress",
    {
      headers: {
        apikey: `${API_KEY}`,
      },
    }
  );
  const result = await EmailAddressAry.data.some((email) => {
    email.mailaddress === reqEmail;
  });
  return await result;
}

regisatrRouter.post("/regist", async (req, res) => {
  const data = await req.body;
  const respnse = await axios.post(
    "https://blltumbexweiimidgyhd.supabase.co/rest/v1/users",
    data,
    {
      headers: {
        apikey: `${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  res.json(respnse.status);
});
export default regisatrRouter;
