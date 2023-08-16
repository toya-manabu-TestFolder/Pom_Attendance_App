import { useDispatch } from "react-redux";
import { reducers } from "../../../features/registarSlice";
import Span from "../../atoms/Span/Span";
import "./GenderButtonForm.css";
import RadioButton from "../../atoms/input/RadioButton/RadioButton";

export default function GenderButtonForm({ errorText }: any) {
  const dispatch = useDispatch();
  const selectGenderType = [
    { id: "male", value: "男性", name: "男性" },
    { id: "female", value: "女性", name: "女性" },
    { id: "other", value: "回答しない", name: "回答しない" },
  ];
  return (
    <div className="GenderButtonForm">
      <label className="gender-label">
        <span className="futidori">性別</span>
        性別
      </label>
      <div className="select-gender-wrap">
        {selectGenderType.map((select) => (
          <div className="RadioButton-wrapp" key={select.id}>
            <RadioButton
              inputId={select.id}
              onClick={() => dispatch(reducers.inputGenderId(select.value))}
              radioName={select.name}
              dataTestid="gender-radio"
            />
          </div>
        ))}
      </div>
      <div className="input-form-errorMsg">
        <Span style="" color="red" text={errorText} onClickSpan={() => {}} />
      </div>
    </div>
  );
}
