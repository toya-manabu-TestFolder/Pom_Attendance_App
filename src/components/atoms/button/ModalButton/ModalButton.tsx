import Img from "../../Img/Img";
import "./ModalButton.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  dataTestId: string;
  imgSrc: string;
  imgAlt: string;
  imgStyle: string;
};

function ModalButton({
  type,
  onClick,
  dataTestId,
  imgSrc,
  imgAlt,
  imgStyle,
}: Props) {
  return (
    <button
      className="modalButton"
      type={type}
      onClick={onClick}
      data-testid={dataTestId}
    >
      <Img alt={imgAlt} src={imgSrc} style={imgStyle} />
    </button>
  );
}

export default ModalButton;
