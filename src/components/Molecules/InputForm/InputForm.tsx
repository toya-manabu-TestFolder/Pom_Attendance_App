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
}: Props) {
  return (
    <div className="input-form">
      <div className="input-form-label">
        <Label label_id={label_id} label_value={label_value} />
      </div>
      <div className="input-form-input">
        <Input
          input_placeholder={input_placeholder}
          input_style={input_style}
          input_type={input_type}
          input_id={input_id}
          inputValue={inputValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
