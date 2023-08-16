import FutidoriSpan from "../../Span/FutidoriSpan/FutidoriSpan";
import "./H2.css";
type Props = {
  text: string;
  dataTestId: string;
};

export default function H2_Ver1({ text, dataTestId }: Props) {
  return (
    <h2 className="H2_Ver1" data-testid={dataTestId}>
      <FutidoriSpan text={text} style={""} />
      {text}
    </h2>
  );
}
