import "./Button.css";
type Props = {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: () => void;
};

export default function Button({ type, text, onClick }: Props) {
  return (
    <button type={type} className="button" onClick={onClick}>
      <span className="futidori">{text}</span>
      {text}
    </button>
  );
}
