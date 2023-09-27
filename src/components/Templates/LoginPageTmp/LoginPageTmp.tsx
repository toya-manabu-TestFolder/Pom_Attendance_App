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
  LoginError: string;
};

export default function LoginPageTmp({ LoginError }: Props) {
  const dispatch = useDispatch();
  const inputData = useSelector(inputValues);
  const navigate = useNavigate();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await dispatch(sendInputData(inputData));
    if (result.payload.status === 200) {
      navigate("/Home");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="LoginPageTmp-wrapp">
        <div className="LoginPageTmp-L-colum">
          <div className="login-form-wrapp">
            <div className="mobile_img_wrapp"></div>

            <div className="error-text-wrapp" data-testid="error-text">
              <Span
                style="display_block"
                color="red"
                text={LoginError}
                onClickSpan={() => {}}
              />
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
                errorText={""}
                inputPassProps={""}
                disabled={false}
                dataTestid="auth-email"
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
                errorText={""}
                inputPassProps={""}
                disabled={false}
                dataTestid="auth-pass"
              />
            </div>
            <div className="login-form-link">
              <Span
                style=""
                color="#faf9a6"
                text="パスワードをお忘れの方はコチラ。"
                onClickSpan={() => {}}
              />
            </div>
            <div className="login-form-button">
              <Button
                type="submit"
                text="ログイン"
                onClick={() => {}}
                dataTestid="login-Button"
                disabled={false}
              />
            </div>
            <div className="login-form-button">
              <Button
                type="button"
                text="新規会員登録"
                onClick={() => navigate("/registar")}
                dataTestid="regist-Button"
                disabled={false}
              />
            </div>
          </div>
        </div>
        <div className="LoginPageTmp-R-colum"></div>
      </div>
    </form>
  );
}
