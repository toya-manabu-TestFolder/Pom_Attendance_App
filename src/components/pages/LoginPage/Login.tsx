import LoginPageTmp from "../../Templates/LoginPageTmp/LoginPageTmp";
import { loginError } from "../../../features/authSlice";
import { useSelector } from "react-redux";

type Props = {};

export default function Login({}: Props) {
  const LoginError = useSelector(loginError);
  return <LoginPageTmp LoginError={LoginError} />;
}
