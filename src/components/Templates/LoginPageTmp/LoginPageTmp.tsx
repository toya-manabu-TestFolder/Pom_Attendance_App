import "./LoginPageTmp.css";
import InputForm from "../../Molecules/InputForm/InputForm";
import Button from "../../atoms/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AuthReducers,
  AuthState,
  sendInputData,
} from "../../../features/authSlice";
import Span from "../../atoms/Span/Span";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { useEffect } from "react";
import { homeSliceReducers } from "../../../features/homeSlice";

export default function LoginPageTmp() {
  const dispatch = useDispatch();
  const { authData, ErrorObj } = useSelector(AuthState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(homeSliceReducers.toggleLoading(false));
    setTimeout(() => {
      dispatch(homeSliceReducers.toggleLoading(true));
    }, 0);
  }, []);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(homeSliceReducers.toggleLoading(false));
    const result = await dispatch(sendInputData(authData));
    if (result.payload.status === 200) {
      navigate("/Home");
    } else {
      dispatch(homeSliceReducers.toggleLoading(true));
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="LoginPageTmp-wrapp">
          <div className="LoginPageTmp-L-colum">
            <div className="login-form-wrapp">
              <div className="mobile_img_wrapp"></div>

              <div className="error-text-wrapp" data-testid="error-text">
                <Span
                  style="display_block"
                  color="red"
                  text={ErrorObj.message}
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
                  inputValue={authData.mailaddress}
                  onChange={(e) => dispatch(AuthReducers.inputMail(e))}
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
                  inputValue={authData.password}
                  onChange={(e) => dispatch(AuthReducers.inputPass(e))}
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
                  onClick={() => {
                    dispatch(homeSliceReducers.toggleLoading(false));
                    navigate("/registar");
                  }}
                  dataTestid="regist-Button"
                  disabled={false}
                />
              </div>
            </div>
          </div>
          <div className="LoginPageTmp-R-colum"></div>
        </div>
      </form>
      <LoadingPage />
    </>
  );
}
