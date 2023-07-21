import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/usersSlice";
import RegistarPageTmp from "../components/Templates/RegistarPageTmp/RegistarPageTmp";
import axios from "axios";

type Props = {};

export default function RegistarInputPage({}: Props) {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <RegistarPageTmp />;
}
