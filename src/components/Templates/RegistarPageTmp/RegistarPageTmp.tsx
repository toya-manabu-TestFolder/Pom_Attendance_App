import RegistarInputSection from "../../Organisms/Registar_Input_Section/RegistarInputSection";
import Button from "../../atoms/button/Button";
import H2_Ver1 from "../../atoms/h2/ver.1/H2";
import "./RegistarPageTmp.css";
import "../../../css/index.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registarData,
  sendRegistarData,
} from "../../../features/registarSlice";
import { RegistarType } from "../../../types/types";

type Props = {};

export default function RegistarPageTmp({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registarDataState = useSelector(registarData);
  async function personalInfoSubmit(
    e: React.FormEvent<HTMLFormElement>,
    registarDataState: RegistarType
  ) {
    e.preventDefault();
    const result = await dispatch(sendRegistarData(registarDataState));
    console.log(result.data);
  }
  return (
    <form onSubmit={(e) => personalInfoSubmit(e, registarDataState)}>
      <div className="RegistarPageTmp-wrapp">
        <div className="H2_Ver1-wrapp">
          <H2_Ver1 text="新規会員登録" />
        </div>
        <div className="RegistarInputSection-wrapp">
          <RegistarInputSection />
        </div>
        <div className="Button-wrapp">
          <Button type="submit" text="登録情報を確認する" onClick={() => {}} />
        </div>
      </div>
    </form>
  );
}
