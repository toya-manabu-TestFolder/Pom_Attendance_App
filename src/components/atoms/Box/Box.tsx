import Span from "../Span/Span";
import "./Box.css";

type Props = {
  title: string;
  element: any;
};
function Box({ title, element }: Props) {
  return (
    <div className="Box_component">
      <div className="Box_component_title">
        <Span
          color="#fbd13d"
          onClickSpan={() => {}}
          style="display_block"
          text={title}
        />
      </div>
      <div className="Box_component_body">{element}</div>
    </div>
  );
}

export default Box;
