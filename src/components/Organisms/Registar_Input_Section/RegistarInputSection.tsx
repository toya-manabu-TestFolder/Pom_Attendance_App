import GenderButtonForm from "../../Molecules/GenderButtonForm/GenderButtonForm";
import InputForm from "../../Molecules/InputForm/InputForm";
import "./RegistarInputSection.css";

type Props = {
  onClickFun: any;
};

export default function RegistarInputSection({ onClickFun }: Props) {
  return (
    <>
      <InputForm
        input_id="name"
        input_placeholder="お名前を入力してください。"
        input_style=""
        input_type="text"
        label_id="name"
        label_value="お名前"
        onClickFun={onClickFun}
      />
      <InputForm
        input_id="furigana"
        input_placeholder="フリガナを入力してください。"
        input_style=""
        input_type="text"
        label_id="furigana"
        label_value="フリガナ"
        onClickFun={onClickFun}
      />
      <GenderButtonForm />
      <InputForm
        input_id="birthday"
        input_placeholder="生年月日を入力してください。"
        input_style=""
        input_type="date"
        label_id="birthday"
        label_value="生年月日"
        onClickFun={onClickFun}
      />
      <InputForm
        input_id=""
        input_placeholder="メールアドレスを入力してください。"
        input_style=""
        input_type="email"
        label_id="email"
        label_value="メールアドレス"
        onClickFun={onClickFun}
      />
      <InputForm
        input_id="phone"
        input_placeholder="電話番号を入力してください。"
        input_style=""
        input_type="phone"
        label_id="phone"
        label_value="電話番号"
        onClickFun={onClickFun}
      />
      <InputForm
        input_id="password"
        input_placeholder="パスワードを入力してください。"
        input_style=""
        input_type="password"
        label_id="password"
        label_value="パスワード"
        onClickFun={onClickFun}
      />
      <InputForm
        input_id="confirmation-password"
        input_placeholder="再度パスワードを入力してください。"
        input_style=""
        input_type="password"
        label_id="confirmation-password"
        label_value="確認用パスワード"
        onClickFun={onClickFun}
      />
    </>
  );
}
