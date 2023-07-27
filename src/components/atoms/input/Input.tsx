import "./input.css";
import "../../../css/index.css";
type Props = {
  input_type: string;
  input_placeholder: string;
  input_id: string;
  input_style: string | undefined;
  inputValue: string;
  onChange: (e: string) => void;
};

export default function Input({
  input_placeholder,
  input_type,
  input_id,
  input_style,
  inputValue,
  onChange,
}: Props) {
  return (
    <>
      {input_type !== "radio" ? (
        <input
          id={input_id}
          className={input_style}
          type={input_type}
          placeholder={input_placeholder}
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
        />
      ) : (
        <>
          <input
            id={input_id}
            className="radio-button"
            type={input_type}
            placeholder={input_placeholder}
            value={input_id}
            name="gender"
          />
          <label className="radio-label" htmlFor={input_id}>
            <span className="radio-span">{input_id}</span>
            {input_id}
          </label>
        </>
      )}
    </>
  );
}
