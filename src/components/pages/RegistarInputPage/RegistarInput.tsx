import { useSelector } from "react-redux";
import RegistarPageTmp from "../../Templates/RegistarPageTmp/RegistarPageTmp";
import { registarState } from "../../../features/registarSlice";

export default function RegistarInputPage({}) {
  const registarDataState = useSelector(registarState);

  return <RegistarPageTmp registarDataState={registarDataState} />;
}
