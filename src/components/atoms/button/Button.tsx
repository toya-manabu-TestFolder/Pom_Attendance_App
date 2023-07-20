import "./Button.css";
type Props = {
  text: string;
  test: any;
};

export default function Button({ text, test }: Props) {
  return (
    <button className="button">
      <span className="futidori" onClick={test}>
        {text}
      </span>
      {text}
    </button>
  );
}
