import { useState } from "react";
import Headers from "../../Organisms/Headers/Headers";
import EmailEdit from "../../Organisms/OherEditComponents/EmailEdit/EmailEdit";
import styles from "./OtherEditPageTmp.module.scss";
// import { gsap } from "gsap/gsap-core";
import ErrorModal from "../../Organisms/Modals/ErrorModal/ErrorModal";
import { useDispatch, useSelector } from "react-redux";
import {
  OuthEditState,
  OuthEditReducers,
} from "../../../features/OuthEditSlice";
import CompletModal from "../../Organisms/Modals/CompletModal/CompletModal";
import PasswordEdit from "../../Organisms/OherEditComponents/PasswordEdit/PasswordEdit";

const OtherEditPageTmp = () => {
  const dispatch = useDispatch();
  const [selectEditPage, setSelectEditPage] = useState("");
  const { ErrorObj } = useSelector(OuthEditState);
  return (
    <>
      <div className={styles.OtherEditPageTmp}>
        <Headers />
        <div className={styles.body}>
          <div className={styles.select_wrapper}>
            <select
              className={styles.select}
              onChange={(event) => {
                setSelectEditPage(event.target.value);
              }}
              defaultValue={""}
            >
              <option className={styles.select_option} value="">
                各種設定一覧
              </option>
              <option
                className={styles.select_option}
                value="メールアドレス変更"
              >
                メールアドレス変更
              </option>
              <option className={styles.select_option} value="パスワード変更">
                パスワード変更
              </option>
            </select>
          </div>
          {selectEditPage === "メールアドレス変更" && <EmailEdit />}
          {selectEditPage === "パスワード変更" && <PasswordEdit />}
        </div>
      </div>

      <ErrorModal
        toggleModal={ErrorObj.isError}
        errorText={ErrorObj.message}
        closeBtnFun={() => {
          dispatch(OuthEditReducers.closeErrorModal());
        }}
      />
      <CompletModal imgURL="/Modals/RegistConfirm.png" />
    </>
  );
};

export default OtherEditPageTmp;
