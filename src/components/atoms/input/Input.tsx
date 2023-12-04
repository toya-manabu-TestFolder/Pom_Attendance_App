import "./input.css";
import "../../../css/index.css";
type Props = {
  input_type: string;
  input_placeholder: string;
  input_id: string;
  input_style: string | undefined;
  inputValue: string | number;
  onChange: (e: string) => void;
  disabled: boolean;
  dataTestid: string;
};

export default function Input({
  input_placeholder,
  input_type,
  input_id,
  input_style,
  inputValue,
  onChange,
  disabled,
  dataTestid,
}: Props) {
  return (
    <>
      <input
        data-testid={dataTestid}
        id={input_id}
        className={`${"input"} ${input_style}`}
        type={input_type}
        placeholder={input_placeholder}
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        autoComplete="off"
        disabled={disabled}
      />
    </>
  );
}
