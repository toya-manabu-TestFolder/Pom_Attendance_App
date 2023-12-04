import Span from "../Span/Span";
import styles from "./Input_ver2.module.scss";
import Button from "../button/Button";
import { useState } from "react";

type Props = {
  labelId: string;
  labelText: string;
  inputType: string;
  placeholder: string;
  attentionText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  inputValue: string;
};

const Input_ver2 = ({
  labelText,
  labelId,
  inputType,
  placeholder,
  attentionText,
  onChange,
  disabled,
  inputValue,
}: Props) => {
  const [InputTypePass, setInputTypePass] = useState(true);
  return (
    <div className={styles.Input_ver2_wrapper}>
      <label className={styles.label} htmlFor={labelId}>
        <Span
          style="display_block"
          color=""
          text={labelText}
          onClickSpan={() => {}}
        />
      </label>
      <Span
        style="display_block"
        color="#F52B00"
        text={attentionText}
        onClickSpan={() => {}}
      />
      {inputType === "password" ? (
        <div className={styles.password_input_wrapper}>
          <input
            id={labelId}
            type={InputTypePass ? "password" : "text"}
            className={`${styles.input} `}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={inputValue}
          />
          <div className={styles.type_changebutton}>
            <Button
              dataTestid=""
              onClick={() => {
                setInputTypePass(InputTypePass ? false : true);
              }}
              text={InputTypePass ? "表示" : "非表示"}
              type="button"
              disabled={false}
            />
          </div>
        </div>
      ) : (
        <input
          id={labelId}
          type={inputType}
          className={`${styles.input} `}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          value={inputValue}
        />
      )}
    </div>
  );
};

export default Input_ver2;
