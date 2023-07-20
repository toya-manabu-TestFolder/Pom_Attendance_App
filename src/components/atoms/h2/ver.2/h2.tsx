import "./h2.css";
type Props = {
  text: string;
};

export default function H2_Ver2({ text }: Props) {
  return (
    <h2 className="H2_Ver2">
      <span className="futidori">{text}</span>
      {text}
    </h2>
  );
}
