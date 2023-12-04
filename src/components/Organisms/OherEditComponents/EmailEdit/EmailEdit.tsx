import Input_ver2 from "../../../atoms/Input_ver2/Input_ver2.jsx";
import styles from "./EmailEdit.module.scss";
import {
  ValidateChangeEmail,
  OuthEditReducers,
  OuthEditState,
  getEmail,
  ChangeEmail,
} from "../../../../features/OuthEditSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/Button.js";
import { useEffect } from "react";
import RecuestModal2 from "../../Modals/RecuestModal2/RecuestModal2.js";
import Span from "../../../atoms/Span/Span.js";
import { homeSliceReducers } from "../../../../features/homeSlice.js";

const EmailEdit = () => {
  const dispatch = useDispatch();
  const { EmailObj, NewEmailErrorMsg, ConfirmationEmailErrorMsg, NowEmail } =
    useSelector(OuthEditState);
  useEffect(() => {
    if (!NowEmail.length) {
      dispatch(getEmail());
    }
  }, []);
  return (
    <>
      <section className={styles.EmailEdit_wrapper}>
        <div className={styles.input_wrapper}>
          <Input_ver2
            labelText="現在のメールアドレス"
            labelId="NowEmail"
            inputType="email"
            placeholder={""}
            attentionText=""
            onChange={() => {}}
            disabled={true}
            inputValue={NowEmail}
          />
        </div>
        <div className={styles.input_wrapper}>
          <Input_ver2
            labelText="新しいメールアドレスを入力してください"
            labelId="NewEmail"
            inputType="email"
            placeholder=""
            attentionText={NewEmailErrorMsg}
            onChange={(e) =>
              dispatch(OuthEditReducers.setEmail(e.target.value))
            }
            disabled={false}
            inputValue={EmailObj.Email}
          />
        </div>
        <div className={styles.input_wrapper}>
          <Input_ver2
            labelText="もう一度、新しいメールアドレスを入力してください。"
            labelId="ConfirmationEmail"
            inputType="email"
            placeholder=""
            attentionText={ConfirmationEmailErrorMsg}
            onChange={(e) =>
              dispatch(OuthEditReducers.setConfirmationEmail(e.target.value))
            }
            disabled={false}
            inputValue={EmailObj.ConfirmationEmail}
          />
        </div>
        <div className={styles.Button_wrapper}>
          <Button
            dataTestid=""
            onClick={() => {
              dispatch(ValidateChangeEmail(EmailObj));
            }}
            text="変更を確認する"
            type="button"
            disabled={false}
          />
        </div>
      </section>
      <RecuestModal2
        toggleModal={EmailObj.toggleModal}
        okBtnFunProps={async () => {
          const Result = await dispatch(ChangeEmail(EmailObj.Email));
          Result.payload.status &&
            dispatch(
              homeSliceReducers.toggleCompletedModal({
                toggleModal: true,
                message: "変更が完了しました！！",
              })
            );
        }}
        noBtnFunProps={() => {
          dispatch(OuthEditReducers.closeModal());
        }}
        text="下記内容で変更してよろしいですか？"
        message={
          <dl style={{ padding: "0 2%" }}>
            <dt style={{}}>
              <Span
                style="display_block"
                color="#f19b23"
                text="現在のメールアドレス"
                onClickSpan={() => {}}
              />
            </dt>
            <dd style={{ padding: "2% 0% 2% 5%" }}>{NowEmail}</dd>
            <dt style={{}}>
              <Span
                style="display_block"
                color="#f19b23"
                text="変更後のメールアドレス"
                onClickSpan={() => {}}
              />
            </dt>
            <dd style={{ padding: "2% 0% 2% 5%" }}>{EmailObj.Email}</dd>
          </dl>
        }
      />
    </>
  );
};

export default EmailEdit;
