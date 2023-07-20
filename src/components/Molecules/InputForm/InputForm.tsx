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
  onClickFun: any;
};

export default function InputForm({
  label_id,
  label_value,
  input_placeholder,
  input_style,
  input_type,
  input_id,
  onClickFun,
}: Props) {
  return (
    <div className="input-form">
      <Label label_id={label_id} label_value={label_value} />
      <Input
        input_placeholder={input_placeholder}
        input_style={input_style}
        input_type={input_type}
        input_id={input_id}
        onClickFun={onClickFun}
      />
    </div>
  );
}
