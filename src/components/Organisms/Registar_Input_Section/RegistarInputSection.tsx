import GenderButtonForm from "../../Molecules/GenderButtonForm/GenderButtonForm";
import InputForm from "../../Molecules/InputForm/InputForm";
import "./RegistarInputSection.css";
import { useSelector, useDispatch } from "react-redux";
import { reducers, registarState } from "../../../features/registarSlice";
import { RegistData } from "../../../types/types";

type Props = {
  errors: RegistData["registar"]["registarDataState"]["errors"];
};
export default function RegistarInputSection({ errors }: Props) {
  const dispatch = useDispatch();
  const registarDataState = useSelector(registarState);
  const inputPassState = registarDataState.inputPassState;
  const inputPassProps = {
    text: inputPassState.text,
    onClickSpan: () =>
      dispatch(reducers.inputPassToggle(inputPassState.toggle)),
  };
  const isErrorStyle = (errorText: string) => {
    return errorText === "" ? "" : "InputError";
  };
  return (
    <div className="RegistarInputSection">
      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="name"
          input_placeholder="お名前を入力してください。"
          input_style={isErrorStyle(errors.name)}
          input_type="text"
          label_id="name"
          label_value="お名前"
          inputValue={registarDataState.registarData.name}
          onChange={(e: string) => {
            dispatch(reducers.inputName(e));
          }}
          errorText={errors.name}
          inputPassProps={""}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>
      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="furigana"
          input_placeholder="フリガナを入力してください。"
          input_style={isErrorStyle(errors.furigana)}
          input_type="text"
          label_id="furigana"
          label_value="フリガナ"
          inputValue={registarDataState.registarData.furigana}
          onChange={(e: string) => {
            dispatch(reducers.inputFurigana(e));
          }}
          errorText={errors.furigana}
          inputPassProps={""}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <GenderButtonForm errorText={errors.gender} />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="birthday"
          input_placeholder="生年月日を入力してください。"
          input_style={isErrorStyle(errors.birthday)}
          input_type="date"
          label_id="birthday"
          label_value="生年月日"
          inputValue={registarDataState.registarData.birthday}
          onChange={(e: string) => {
            dispatch(reducers.inputBirthday(e));
          }}
          errorText={errors.birthday}
          inputPassProps={""}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id=""
          input_placeholder="メールアドレスを入力してください。"
          input_style={isErrorStyle(errors.mailaddress)}
          input_type="email"
          label_id="email"
          label_value="メールアドレス"
          inputValue={registarDataState.registarData.mailaddress}
          onChange={(e: string) => {
            dispatch(reducers.inputEmail(e));
          }}
          errorText={errors.mailaddress}
          inputPassProps={""}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="phone"
          input_placeholder="電話番号を入力してください。"
          input_style=""
          input_type="phone"
          label_id="phone"
          label_value="電話番号"
          inputValue={registarDataState.registarData.phone}
          onChange={(e: string) => {
            dispatch(reducers.inputPhone(e));
          }}
          errorText={errors.phone}
          inputPassProps={""}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="password"
          input_placeholder="パスワードを入力してください。"
          input_style={isErrorStyle(
            errors.password ===
              "8文字以上24文字以内の英小文字と数字を一文字以上含めてください。"
              ? ""
              : errors.password
          )}
          input_type={inputPassState.type}
          label_id="password"
          label_value="パスワード"
          inputValue={registarDataState.registarData.password}
          onChange={(e: string) => {
            dispatch(reducers.inputPassword(e));
          }}
          errorText={errors.password}
          inputPassProps={inputPassProps}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="confirmation-password"
          input_placeholder="再度パスワードを入力してください。"
          input_style={isErrorStyle(errors.configrationPass)}
          input_type={inputPassState.type}
          label_id="confirmation-password"
          label_value="確認用パスワード"
          inputValue={registarDataState.registarData.configrationPass}
          onChange={(e: string) => {
            dispatch(reducers.inputConfirmationPassword(e));
          }}
          errorText={errors.configrationPass}
          inputPassProps={inputPassProps}
          disabled={false}
          dataTestid="regist-input"
        />
      </div>
    </div>
  );
}
