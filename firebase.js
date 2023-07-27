// firebaseアプリを初期化する。
import { initializeApp } from "firebase/app";
// getAuthは、クライアント側からfirebaseのAuthenticationサーバーと接続に使うAuthオブジュトを取得するための関数
import { getAuth } from "firebase/auth";
// firebaseのDBであるfirestoreに接続するオブジェクト。
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-_tIWusoPT6zrkQ58ER1HXNrlmk9beEI",
  authDomain: "pomattendaceproject.firebaseapp.com",
  projectId: "pomattendaceproject",
  storageBucket: "pomattendaceproject.appspot.com",
  messagingSenderId: "741297667179",
  appId: "1:741297667179:web:ba3e99a4cc296019ad052e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
