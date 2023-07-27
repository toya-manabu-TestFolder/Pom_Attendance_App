import "./LoginPageTmp.css";
import InputForm from "../../Molecules/InputForm/InputForm";
import Button from "../../atoms/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  inputMail,
  inputPass,
  sendInputData,
  inputValues,
} from "../../../features/authSlice";
import Span from "../../atoms/Span/Span";

type Props = {
  LoginError: boolean;
};

export default function LoginPageTmp({ LoginError }: Props) {
  const dispatch = useDispatch();
  const inputData = useSelector(inputValues);
  const navigate = useNavigate();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await dispatch(sendInputData(inputData));
    if (result.payload) navigate("/registar");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="LoginPageTmp-wrapp">
        <div className="LoginPageTmp-L-colum">
          <div className="login-form-wrapp">
            <div className="error-text-wrapp">
              {LoginError && (
                <Span color="red" text="ログイン情報が間違っています！！" />
              )}
            </div>
            <div className="login-form-input">
              <InputForm
                input_id=""
                input_placeholder="メールアドレスを入力してください。"
                input_style=""
                input_type="email"
                label_id="email"
                label_value="メールアドレス"
                inputValue={inputData.mailaddress}
                onChange={(e) => dispatch(inputMail(e))}
              />
            </div>
            <div className="login-form-input">
              <InputForm
                input_id="password"
                input_placeholder="パスワードを入力してください。"
                input_style=""
                input_type="password"
                label_id="password"
                label_value="パスワード"
                inputValue={inputData.password}
                onChange={(e) => dispatch(inputPass(e))}
              />
            </div>
            <div className="login-form-link">
              <Span color="#faf9a6" text="パスワードをお忘れの方はコチラ。" />
            </div>
            <div className="login-form-button">
              <Button type="submit" text="ログイン" onClick={() => {}} />
            </div>
            <div className="login-form-button">
              <Button
                type="button"
                text="新規会員登録"
                onClick={() => navigate("/registar")}
              />
            </div>
          </div>
        </div>
        <div className="LoginPageTmp-R-colum"></div>
      </div>
    </form>
  );
}
