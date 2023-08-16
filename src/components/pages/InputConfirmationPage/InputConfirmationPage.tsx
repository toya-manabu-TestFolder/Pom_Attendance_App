import { useSelector } from "react-redux";
import InputConfirmationPageTmp from "../../Templates/InputConfirmationPageTmp/InputConfirmationPageTmp";
import { State } from "../../../features/confirmationSlice";

const InputConfirmationPage = () => {
  const confirmationState = useSelector(State);
  return (
    <>
      <InputConfirmationPageTmp confirmationState={confirmationState} />
    </>
  );
};

export default InputConfirmationPage;
