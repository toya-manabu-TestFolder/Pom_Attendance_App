import "./input.css";
import "../../../css/index.css";
import { useState } from "react";
type Props = {
  input_type: string;
  input_placeholder: string;
  input_id: string;
  input_style: string | undefined;
  onClickFun: any;
};

export default function Input({
  input_placeholder,
  input_type,
  input_id,
  input_style,
  onClickFun,
}: Props) {
  const [inputText, setInputText] = useState("");

  return (
    <>
      {input_type !== "radio" ? (
        <input
          id={input_id}
          className={input_style}
          type={input_type}
          placeholder={input_placeholder}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onClick={onClickFun}
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
            onClick={onClickFun}
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
