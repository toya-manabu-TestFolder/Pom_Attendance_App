import GenderButtonForm from "../../Molecules/GenderButtonForm/GenderButtonForm";
import InputForm from "../../Molecules/InputForm/InputForm";
import "./RegistarInputSection.css";
import { useSelector, useDispatch } from "react-redux";
import { reducers, registarData } from "../../../features/registarSlice";

type Props = {};

export default function RegistarInputSection({}: Props) {
  const dispatch = useDispatch();
  const registarDataState = useSelector(registarData);

  return (
    <div className="RegistarInputSection">
      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="name"
          input_placeholder="お名前を入力してください。"
          input_style=""
          input_type="text"
          label_id="name"
          label_value="お名前"
          inputValue={registarDataState.name}
          onChange={(e: string) => {
            dispatch(reducers.inputName(e));
          }}
        />
      </div>
      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="furigana"
          input_placeholder="フリガナを入力してください。"
          input_style=""
          input_type="text"
          label_id="furigana"
          label_value="フリガナ"
          inputValue={registarDataState.furigana}
          onChange={(e: string) => {
            dispatch(reducers.inputFurigana(e));
          }}
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <GenderButtonForm />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="birthday"
          input_placeholder="生年月日を入力してください。"
          input_style=""
          input_type="date"
          label_id="birthday"
          label_value="生年月日"
          inputValue={registarDataState.birthday}
          onChange={(e: string) => {
            dispatch(reducers.inputBirthday(e));
          }}
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id=""
          input_placeholder="メールアドレスを入力してください。"
          input_style=""
          input_type="email"
          label_id="email"
          label_value="メールアドレス"
          inputValue={registarDataState.mailaddress}
          onChange={(e: string) => {
            dispatch(reducers.inputEmail(e));
          }}
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
          inputValue={registarDataState.phone}
          onChange={(e: string) => {
            dispatch(reducers.inputPhone(e));
          }}
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="password"
          input_placeholder="パスワードを入力してください。"
          input_style=""
          input_type="password"
          label_id="password"
          label_value="パスワード"
          inputValue={registarDataState.password}
          onChange={(e: string) => {
            dispatch(reducers.inputPassword(e));
          }}
        />
      </div>

      <div className="RegistarInputForm-wrapp">
        <InputForm
          input_id="confirmation-password"
          input_placeholder="再度パスワードを入力してください。"
          input_style=""
          input_type="password"
          label_id="confirmation-password"
          label_value="確認用パスワード"
          inputValue=""
          onChange={(e: string) => {
            dispatch(reducers.inputConfirmationPassword(e));
          }}
        />
      </div>
    </div>
  );
}
