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
          all_have_days: 10,
          all_heve_time: 80,
          consumption_days: 0,
          consumption_time: 0,
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

regisatrRouter.post(
  "/ValidateChangeEmail",
  checkSchema({
    Email: {
      notEmpty: {
        errorMessage: "※ 入力内容がありません !!",
      },
      isEmail: {
        errorMessage: "※ メールアドレスのフォーマットが正しくありません !!",
      },
    },
    ConfirmationEmail: {
      custom: {
        if: (value, { req }) => {
          if (value !== req.body.Email) return true;
        },
        errorMessage: "※ メールアドレスが一致しません !!",
      },
    },
  }),
  async (req, res) => {
    const errors = validationResult(req).array();
    await axios
      .get(`${SUPABASE_URL}users?mailaddress=eq.${req.body.Email}`, {
        headers: {
          apikey: `${API_KEY}`,
        },
      })
      .then((res) => {
        if (res.data.length) {
          const emailError = {
            msg: "※ 既に登録済みのメールアドレスです !!",
            path: "Email",
          };
          errors.push(emailError);
        }
      });

    if (errors.length) {
      res.json({ status: false, errors: errors[0] });
    } else {
      res.json({ status: true, errors: errors });
    }
  }
);

regisatrRouter.post("/ChangeEmail", async (req, res) => {
  try {
    await axios.patch(
      `${SUPABASE_URL}users?id=eq.${req.session.userID}`,
      { mailaddress: req.body.data },
      {
        headers: {
          apikey: `${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json({ status: true, body: req.body.data });
  } catch (error) {
    res.json({ status: false, body: "" });
  }
});

regisatrRouter.post(
  "/ValidateChangePassword",
  checkSchema({
    NowPassword: {
      notEmpty: {
        errorMessage: "※ 入力内容がありません !!",
      },
    },
    NewPassword: {
      notEmpty: {
        errorMessage: "※ 入力内容がありません !!",
      },
      matches: {
        options: "^(?=.*[0-9])(?=.*[a-z])[a-z0-9]{8,24}$",
        errorMessage: "※ 8文字以上24文字以内の半角英数字を入力してください!!",
      },
    },
    ConfirmationPassword: {
      custom: {
        if: (value, { req }) => {
          if (value !== req.body.NewPassword) return true;
        },
        errorMessage: "※ 入力内容が一致しません !!",
      },
    },
  }),
  async (req, res) => {
    const errors = validationResult(req).array();
    await axios
      .get(`${SUPABASE_URL}users?select=password&id=eq.${req.session.userID}`, {
        headers: {
          apikey: `${API_KEY}`,
        },
      })
      .then((Res) => {
        bcrypt.compare(
          req.body.NowPassword,
          Res.data[0].password,
          async (err, result) => {
            if (!result) {
              const NowPasswordError = {
                msg: "※ 現在のメールアドレスと違います !!",
                path: "NowPassword",
              };
              errors.push(NowPasswordError);
            }

            if (errors.length) {
              res.json({ status: false, errors: errors });
            } else {
              res.json({ status: true, errors: errors });
            }
          }
        );
      });
  }
);

export default regisatrRouter;
