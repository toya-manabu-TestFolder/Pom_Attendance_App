import express from "express";
import axios from "axios";
//  cors()はCross-origin resource sharingを設定するミドルウェア
//  これを設定しないと、ローカルとバックのアドレスが違うからエラーが発生する。
//  厳密に言うと、webブラウザにcorsとsopの二つのポリシーがあり、
//  sopは同じアドレス（オリジン）ならリソースを共有できるというポリシー
//  corsは違うオリジンでもリソース共有権限付与をブラウザに指示するべきポリシー
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);
const port = 3000;

app.get("/api/get", async (req, res) => {
  const users = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    });
  res.json(users);
});

app.listen(port, () => console.log("startExpress!!"));
