import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button/Button";
import H2_Ver1 from "../../atoms/h2/ver.1/H2";
import styles from "./CompletRegistPageTmp.module.css";
import { homeSliceReducers } from "../../../features/homeSlice";
import { useDispatch } from "react-redux";

const CompletRegistPageTmp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.CompletRegistPageTmp_wrapp}>
      <div className={styles.title_wrapp}>
        <H2_Ver1 dataTestId="title" text="会員登録が完了しました！！" />
      </div>
      <div className={styles.text}>
        <span>
          下記のメールアドレスに確認メールを送信しました。
          <br />
          下記のログインボタンまたはメールのログインURLよりログインしてください。
        </span>
      </div>
      <div className={styles.button}>
        <Button
          dataTestid="button"
          onClick={() => {
            dispatch(homeSliceReducers.toggleLoading(false));
            navigate("/");
          }}
          text="ログインページへ"
          type="button"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default CompletRegistPageTmp;
