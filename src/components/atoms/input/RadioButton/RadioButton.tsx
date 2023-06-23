import "./RadioButton.css";

type Props = {
  inputId: string;
  onClick: () => void;
  radioName: string;
  dataTestid: string;
};

const RadioButton = ({ inputId, onClick, radioName, dataTestid }: Props) => {
  return (
    <div className="radiobutton-component" onClick={onClick}>
      <input
        type="radio"
        id={inputId}
        className="radio-button"
        name="radio"
        data-testid={dataTestid}
      />
      <label className="radio-label" htmlFor={inputId}>
        <span className="radio-span">{radioName}</span>
        {radioName}
      </label>
    </div>
  );
};

export default RadioButton;
