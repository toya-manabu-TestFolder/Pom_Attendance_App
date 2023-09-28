import express from "express";
import cookie from "cookie-parser";
//  cors()はCross-origin resource sharingを設定するミドルウェア
//  これを設定しないと、ローカルとバックのアドレスが違うからエラーが発生する。
//  厳密に言うと、webブラウザにcorsとsopの二つのポリシーがあり、
//  sopは同じアドレス（オリジン）ならリソースを共有できるというポリシー
//  corsは違うオリジンでもリソース共有権限付与をブラウザに指示するべきポリシー
import cors from "cors";
import authRouter from "./routes/authApi.js";
import registarRouter from "./routes/registarApi.js";
import DayScheduleRouter from "./routes/DayScheduleApi.js";
import fs from "fs";
import https from "https";
import session from "express-session";
import RedisStore from "connect-redis";
import redis from "redis";
// import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 3000;
const CERT = process.env.cert;
const CERT_KEY = process.env.cert_key;
//
// const option = {
//   // fs.readFileSyncでのファイル指定はルートディレクトリからスタート
//   cert: CERT,
//   key: CERT_KEY,
// };
// const server = https.createServer(option, app);
// server.listen(port, () => console.log("startExpress!!"));
//
app.listen(port, () => console.log("startExpress!!"));

app.use(cookie());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://localhost:5173",
      "https://localhost:4173",
    ], //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);
// express.json()でjson形式のデータを読み取ることが出来る。
app.use(express.json());

//
// redisの操作宣言
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
let redisClient = redis.createClient({
  url: `${REDIS_URL}`,
});
// RedisServerへ接続
await redisClient.connect().catch(console.error);

// express-sessionの保存先変数
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

// express-sessionの設定と利用宣言
app.set("trust proxy", 1);
app.use(
  session({
    name: "pom_ssid",
    resave: false, // セッションデータが書き換えられなくてもID発行するかどうか。
    saveUninitialized: false, // 未変更のセッションデータを保存し直すアクションをするかどうか。
    secret: "keyboardcat",
    store: redisStore,
    cookie: {
      secure: true,
      httpOnly: true,
    },
  })
);

app.get("/logout", async (req, res) => {
  redisClient.del(`myapp:${req.sessionID}`);
});
app.get("/test", async (req, res) => {
  res.cookie("test", "test").json();
});

app.use("/authApi", authRouter);
app.use("/registarApi", registarRouter);
app.use("/DayScheduleApi", DayScheduleRouter);
