import Span from "../../atoms/Span/Span";
import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";
import "./inputform.css";
type Props = {
  label_id: string;
  label_value: string;
  input_placeholder: string;
  input_style: string;
  input_type: string;
  input_id: string;
  inputValue: string;
  onChange: (e: string) => void;
  errorText: string;
  inputPassProps:
    | ""
    | {
        text: string;
        onClickSpan: () => void;
      };
  disabled: boolean;
  dataTestid: string;
};

export default function InputForm({
  label_id,
  label_value,
  input_placeholder,
  input_style,
  input_type,
  input_id,
  inputValue,
  onChange,
  errorText,
  inputPassProps,
  disabled,
  dataTestid,
}: Props) {
  return (
    <div className="input-form">
      <div className="input-label-wrapp">
        <div className="input-form-label">
          <Label label_id={label_id} label_value={label_value} />
        </div>
        {inputPassProps ? (
          <div className="pass-toggle">
            <Span
              style="pass_toggle"
              color="#fff"
              text={inputPassProps.text}
              onClickSpan={inputPassProps.onClickSpan}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="input-form-input">
        <Input
          input_placeholder={input_placeholder}
          input_style={input_style}
          input_type={input_type}
          input_id={input_id}
          inputValue={inputValue}
          onChange={onChange}
          disabled={disabled}
          dataTestid={dataTestid}
        />
      </div>
      <div className="input-form-errorMsg">
        <Span
          style="errorMsg"
          color="red"
          text={errorText}
          onClickSpan={() => {}}
        />
      </div>
    </div>
  );
}
