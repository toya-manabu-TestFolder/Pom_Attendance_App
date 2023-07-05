import "./input.css";
type Props = {
  type: string;
  placeholder: string;
  value: string;
  style: string;
};

export default function Input({ placeholder, type, value, style }: Props) {
  return (
    <input
      className={style}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}
