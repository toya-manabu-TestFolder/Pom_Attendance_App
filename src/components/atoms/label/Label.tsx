import "./label.css";
type Props = {
  label_value: string;
  label_id: string;
};

export default function Label({ label_value, label_id }: Props) {
  return (
    <label className="label" htmlFor={label_id}>
      <span className="futidori">{label_value}</span>
      {label_value}
    </label>
  );
}
