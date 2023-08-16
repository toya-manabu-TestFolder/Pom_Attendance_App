import FutidoriSpan from "../Span/FutidoriSpan/FutidoriSpan";
import "./Button.css";
type Props = {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: () => void;
  dataTestid: string;
};

export default function Button({ type, text, onClick, dataTestid }: Props) {
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
      data-testid={dataTestid}
    >
      <FutidoriSpan text={text} style={""} />
      {text}
    </button>
  );
}
