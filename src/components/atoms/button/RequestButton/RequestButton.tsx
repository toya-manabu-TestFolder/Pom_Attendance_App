import FutidoriSpan from "../../Span/FutidoriSpan/FutidoriSpan";
import "./RequestButton.css";
type Props = {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  style: string;
  onClick: () => void;
  dataTestid: string;
  disabled: boolean;
};

function RequestButton({
  type,
  text,
  style,
  onClick,
  dataTestid,
  disabled,
}: Props) {
  return (
    <button
      type={type}
      className={`${disabled ? "pushed" : "RequestButton_component"} ${style}`}
      onClick={onClick}
      data-testid={dataTestid}
      disabled={disabled}
    >
      <FutidoriSpan style={style} text={text} />
      {text}
    </button>
  );
}

export default RequestButton;
