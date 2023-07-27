import "./Span.css";
type Props = { text: string; color: string };

export default function Span({ text, color }: Props) {
  return (
    <span className="span-cmponent" style={{ color: `${color}` }}>
      <span className="futidori">{text}</span>
      {text}
    </span>
  );
}
