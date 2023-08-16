import "./FutidoriSpan.css";
type Props = {
  text: string | number;
  style: string;
};

function FutidoriSpan({ text, style }: Props) {
  return (
    <div className={`${"futidori-wrapp"} ${style}`}>
      <span className="futidori">{text}</span>
    </div>
  );
}

export default FutidoriSpan;
