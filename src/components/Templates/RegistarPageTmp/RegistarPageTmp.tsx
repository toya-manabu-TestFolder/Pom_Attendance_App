import RegistarInputSection from "../../Organisms/Registar_Input_Section/RegistarInputSection";
import Button from "../../atoms/button/Button";
import H2_Ver1 from "../../atoms/h2/ver.1/H2";
import "./RegistarPageTmp.css";
import "../../../css/index.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRegistarData, reducers } from "../../../features/registarSlice";
import { confirmationReducers } from "../../../features/confirmationSlice";
import { RegistData } from "../../../types/types";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { useEffect } from "react";
import { homeSliceReducers } from "../../../features/homeSlice";

type Props = RegistData["registar"];

export default function RegistarPageTmp({ registarDataState }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeSliceReducers.toggleLoading(false));
    setTimeout(() => {
      dispatch(homeSliceReducers.toggleLoading(true));
    }, 0);
  }, []);

  async function personalInfoSubmit(
    e: React.FormEvent<HTMLFormElement>,
    registarDataState: any
  ) {
    e.preventDefault();
    dispatch(homeSliceReducers.toggleLoading(false));
    const resetErrorObj = {
      name: "",
      furigana: "",
      mailaddress: "",
      birthday: "",
      phone: "",
      password: "",
      configrationPass: "",
    };
    dispatch(reducers.resetStateErrors(resetErrorObj));
    const result = await dispatch(
      sendRegistarData(registarDataState.registarData)
    );
    if (result.payload === "OK") {
      const registData = registarDataState.registarData;
      dispatch(confirmationReducers.confirmationDataToUpdate(registData));
      dispatch(confirmationReducers.sendDataUpdate(registData));
      navigate("/inputConfirmation");
    } else {
      dispatch(homeSliceReducers.toggleLoading(true));
    }
  }

  return (
    <>
      <form
        className={"RegistarPageTmp_form"}
        onSubmit={(e) => personalInfoSubmit(e, registarDataState)}
      >
        <div className="RegistarPageTmp-wrapp">
          <div className="H2_Ver1-wrapp">
            <H2_Ver1 text="新規会員登録" dataTestId="regist-title" />
          </div>
          <div className="RegistarInputSection-wrapp">
            <RegistarInputSection errors={registarDataState.errors} />
          </div>
          <div className="Button-wrapp">
            <Button
              type="submit"
              text="登録情報を確認する"
              onClick={() => {}}
              dataTestid="regist-button"
              disabled={false}
            />
          </div>
        </div>
      </form>
      <LoadingPage />
    </>
  );
}
