import Input from "../../atoms/input/Input";
import "./GenderButtonForm.css";

export default function GenderButtonForm() {
  return (
    <div className="input-form">
      <label className="gender-label">
        <span className="futidori">性別</span>
        性別
      </label>
      <div className="select-gender-wrap">
        <Input
          input_id="男性"
          input_placeholder=""
          input_style="gender-select-btn"
          input_type="radio"
          inputValue="男性"
          onChange={() => {}}
        />
        <Input
          input_id="女性"
          input_placeholder=""
          input_style="gender-select-btn"
          input_type="radio"
          inputValue="女性"
          onChange={() => {}}
        />
        <Input
          input_id="回答しない"
          input_placeholder=""
          input_style="gender-select-btn"
          input_type="radio"
          inputValue="回答しない"
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
