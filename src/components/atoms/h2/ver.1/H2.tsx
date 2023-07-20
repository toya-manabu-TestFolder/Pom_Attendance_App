import "./H2.css";
type Props = {
  text: string;
};

export default function H2_Ver1({ text }: Props) {
  return (
    <h2 className="H2_Ver1">
      <span className="futidori">{text}</span>
      {text}
    </h2>
  );
}
