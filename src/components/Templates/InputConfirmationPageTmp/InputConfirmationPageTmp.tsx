import { useDispatch, useSelector } from "react-redux";
import { ConfirmationDataType } from "../../../types/types";
import {
  sendDataState,
  errorState,
  RegistData,
  confirmationReducers,
} from "../../../features/confirmationSlice";
import { reducers } from "../../../features/registarSlice";
import InputConfirmationSection from "../../Organisms/InputConfirmationSection/InputConfirmationSection";
import Button from "../../atoms/button/Button";
import H2_Ver1 from "../../atoms/h2/ver.1/H2";
import "./InputConfirmationPageTmp.css";
import Span from "../../atoms/Span/Span";
import { useNavigate } from "react-router-dom";

type Props = { confirmationState: ConfirmationDataType["confirmation"] };

function InputConfirmationPageTmp({ confirmationState }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendData = useSelector(sendDataState);
  const error = useSelector(errorState);

  const sendRegistData = async (
    event: React.FormEvent<HTMLFormElement>,
    sendData: Props["confirmationState"]["sendData"]
  ) => {
    event.preventDefault();
    const result = await dispatch(RegistData(sendData));
    if (result.payload === 200) {
      dispatch(confirmationReducers.sendEmail());
      setTimeout(() => {
        dispatch(confirmationReducers.resetState());
        dispatch(reducers.resetRegistarData());
        navigate("/CompletRegist");
      }, 0);
    }
  };

  return (
    <form onSubmit={(event) => sendRegistData(event, sendData)}>
      <div className="InputConfirmationPageTmp-wrapp">
        <div className="InputConfirmationPage-title">
          <H2_Ver1 text="登録内容の確認" dataTestId="InputConfirmationTitle" />
        </div>
        <div className="confirmationSection-wrapp">
          <InputConfirmationSection confirmationState={confirmationState} />
        </div>
        <div className="error-wrapp" data-testid="error">
          <Span style="" color="red" text={error} onClickSpan={() => {}} />
        </div>
        <div className="confirmation-button">
          <Button
            onClick={() => {}}
            text="これで登録する"
            type="submit"
            dataTestid="submit-button"
            disabled={false}
          />
        </div>
        <div className="confirmation-button">
          <Button
            onClick={() => {
              navigate("/registar");
            }}
            text="内容を変更する"
            type="button"
            dataTestid="change-button"
            disabled={false}
          />
        </div>
      </div>
    </form>
  );
}

export default InputConfirmationPageTmp;
