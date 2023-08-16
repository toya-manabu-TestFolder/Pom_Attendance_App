import FutidoriSpan from "../Span/FutidoriSpan/FutidoriSpan";
import "./label.css";
type Props = {
  label_value: string;
  label_id: string;
};

export default function Label({ label_value, label_id }: Props) {
  return (
    <label className="label" htmlFor={label_id}>
      <FutidoriSpan text={label_value} style={""} />
      {label_value}
    </label>
  );
}
