import FutidoriSpan from "./FutidoriSpan/FutidoriSpan";
import "./Span.css";
type Props = {
  text: string | number;
  style: string;
  color: string;
  onClickSpan: () => void;
};

export default function Span({ text, style, color, onClickSpan }: Props) {
  return (
    <div className="span-cmponent">
      <span className={style} style={{ color: color }} onClick={onClickSpan}>
        <FutidoriSpan style={style} text={text} />
        {text}
      </span>
    </div>
  );
}
