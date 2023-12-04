import Input_ver2 from "../../../atoms/Input_ver2/Input_ver2.jsx";
import styles from "./PasswordEdit.module.scss";
import {
  OuthEditReducers,
  OuthEditState,
  ValidateChangePassword,
} from "../../../../features/OuthEditSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/Button.js";
import RecuestModal2 from "../../Modals/RecuestModal2/RecuestModal2.js";
// import Span from "../../../atoms/Span/Span.js";
// import { homeSliceReducers } from "../../../../features/homeSlice.js";

const PasswordEdit = () => {
  const dispatch = useDispatch();
  const { PassWordObj } = useSelector(OuthEditState);

  return (
    <>
      <section className={styles.PasswordEdit_wrapper}>
        <div className={styles.input_wrapper}>
          <Input_ver2
            labelText="現在のパスワードを入力してください。"
            labelId="NowPassword"
            inputType="password"
            placeholder={""}
            attentionText={PassWordObj.NowPasswordErrorMsg}
            onChange={(e) => {
              dispatch(OuthEditReducers.setNowPassword(e.target.value));
            }}
            disabled={false}
            inputValue={PassWordObj.NowPassword}
          />
        </div>
        <div className={styles.input_wrapper}>
          <Input_ver2
            labelText="新しいパスワードを入力してください"
            labelId="NewPassword"
            inputType="password"
            placeholder=""
            attentionText={PassWordObj.NewPasswordErrorMsg}
            onChange={(e) => {
              dispatch(OuthEditReducers.setNewPassword(e.target.value));
            }}
            disabled={false}
            inputValue={PassWordObj.NewPassword}
          />
        </div>
        <div className={styles.input_wrapper}>
          <Input_ver2
            labelText="もう一度、新しいパスワードを入力してください。"
            labelId="ConfirmationPassword"
            inputType="password"
            placeholder=""
            attentionText={PassWordObj.ConfirmationPasswordErrorMsg}
            onChange={(e) => {
              dispatch(
                OuthEditReducers.setConfirmationPassword(e.target.value)
              );
            }}
            disabled={false}
            inputValue={PassWordObj.ConfirmationPassword}
          />
        </div>
        <div className={styles.Button_wrapper}>
          <Button
            dataTestid=""
            onClick={() => {
              dispatch(ValidateChangePassword(PassWordObj));
            }}
            text="変更を確認する"
            type="button"
            disabled={false}
          />
        </div>
      </section>
      <RecuestModal2
        toggleModal={PassWordObj.toggleModal}
        okBtnFunProps={async () => {
          // const Result = await dispatch(ChangeEmail(EmailObj.Email));
          // Result.payload.status &&
          //   dispatch(
          //     homeSliceReducers.toggleCompletedModal({
          //       toggleModal: true,
          //       message: "変更が完了しました！！",
          //     })
          //   );
        }}
        noBtnFunProps={() => {
          dispatch(OuthEditReducers.closeModal());
        }}
        text="下記内容で変更してよろしいですか？"
        message={
          <></>
          // <dl style={{ padding: "0 2%" }}>
          //   <dt style={{}}>
          //     <Span
          //       style="display_block"
          //       color="#f19b23"
          //       text="現在のメールアドレス"
          //       onClickSpan={() => {}}
          //     />
          //   </dt>
          //   <dd style={{ padding: "2% 0% 2% 5%" }}>{NowEmail}</dd>
          //   <dt style={{}}>
          //     <Span
          //       style="display_block"
          //       color="#f19b23"
          //       text="変更後のメールアドレス"
          //       onClickSpan={() => {}}
          //     />
          //   </dt>
          //   <dd style={{ padding: "2% 0% 2% 5%" }}>{EmailObj.Email}</dd>
          // </dl>
        }
      />
    </>
  );
};

export default PasswordEdit;
