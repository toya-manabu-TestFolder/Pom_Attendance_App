import { useDispatch } from "react-redux";
import { confirmationReducers } from "../../../features/confirmationSlice";
import "./InputConfirmationSection.css";
import InputForm from "../../Molecules/InputForm/InputForm";
import { ConfirmationDataType } from "../../../types/types";

type Props = { confirmationState: ConfirmationDataType["confirmation"] };

function InputConfirmationSection({ confirmationState }: Props) {
  const dispatch = useDispatch();
  const confirmationData = confirmationState.confirmationData;
  const passDisplay = confirmationState.inputPassState;
  const passDisplayState = {
    text: passDisplay.text,
    onClickSpan: () =>
      dispatch(confirmationReducers.inputPassToggle(passDisplay.toggle)),
  };

  return (
    <>
      {confirmationData.map((state, index) => (
        <div className="InputConfirmaiton-wrapp" key={index}>
          <InputForm
            errorText=""
            inputPassProps={state.type === "password" ? passDisplayState : ""}
            inputValue={state.value}
            input_id="text"
            input_placeholder=""
            input_style=""
            input_type={
              state.type === "password" ? passDisplay.type : state.type
            }
            label_id="text"
            label_value={state.name}
            onChange={() => {}}
            disabled={true}
            dataTestid={`registConfirmation-input${index}`}
          />
        </div>
      ))}
    </>
  );
}

export default InputConfirmationSection;
