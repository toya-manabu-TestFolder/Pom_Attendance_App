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
import https from "https";
import fs from "fs";
import session from "express-session";
import RedisStore from "connect-redis";
import redis from "redis";
import MonthScheduleRouter from "./routes/MonthScheduleApi.js";
import HomeRouter from "./routes/HomeApi.js";

const app = express();
const port = 3000;
//---------------------------------------------------------------------
// const option = {
//   // fs.readFileSyncでのファイル指定はルートディレクトリからスタート
//   cert: fs.readFileSync("/certification/cert.pem"),
//   key: fs.readFileSync("/certification/privatekey.pem"),
// };
// const server = https.createServer(option, app);
// server.listen(port, () => console.log("startExpress!!"));
//---------------------------------------------------------------------
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
app.use(express.json()); // express.json()でjson形式のデータを読み取ることが出来る。

//
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL; // redisの操作宣言
let redisClient = redis.createClient({
  url: `${REDIS_URL}`,
});

await redisClient.connect().catch(console.error); // RedisServerへ接続

// express-sessionの保存先変数
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

app.set("trust proxy", true); //X-Forwarded-Host ヘッダーを信頼する設定

// express-sessionの設定と利用宣言
app.use(
  session({
    name: "pom_ssid", //保存するcookie名
    resave: false, // セッションデータが書き換えられなくてもID発行するかどうか。
    saveUninitialized: false, // 未変更のセッションデータを保存し直すアクションをするかどうか。
    secret: "fjoascosamdfjfc", //セッションIDが書き換えられていないか確認するためのランダムな値
    store: redisStore, //store設定
    cookie: {
      secure: true, //httpsとのみやり取りする。
      httpOnly: true, //httpからのjavascriptでのやり取り不可。
    },
  })
);

app.use("/authApi", authRouter);
app.use("/registarApi", registarRouter);
app.use("/HomeApi", HomeRouter);
app.use("/DayScheduleApi", DayScheduleRouter);
app.use("/MonthScheduleApi", MonthScheduleRouter);
