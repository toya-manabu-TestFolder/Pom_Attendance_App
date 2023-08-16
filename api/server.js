import express from "express";

//  cors()はCross-origin resource sharingを設定するミドルウェア
//  これを設定しないと、ローカルとバックのアドレスが違うからエラーが発生する。
//  厳密に言うと、webブラウザにcorsとsopの二つのポリシーがあり、
//  sopは同じアドレス（オリジン）ならリソースを共有できるというポリシー
//  corsは違うオリジンでもリソース共有権限付与をブラウザに指示するべきポリシー
import cors from "cors";
import authRouter from "./routes/authApi.js";
import registarRouter from "./routes/registarApi.js";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);
// express.json()でjson形式のデータを読み取ることが出来る。
app.use(express.json());
app.use("/authApi", authRouter);
app.use("/registarApi", registarRouter);

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => console.log("startExpress!!"));
