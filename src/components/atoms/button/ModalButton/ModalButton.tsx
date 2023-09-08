import "./ModalButton.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  dataTestId: string;
  imgSrc: string;
  imgAlt: string;
};

function ModalButton({ type, onClick, dataTestId, imgSrc, imgAlt }: Props) {
  return (
    <button
      className="modalButton"
      type={type}
      onClick={onClick}
      data-testid={dataTestId}
    >
      <img className="modalButton_img" alt={imgAlt} src={imgSrc} />
    </button>
  );
}

export default ModalButton;
