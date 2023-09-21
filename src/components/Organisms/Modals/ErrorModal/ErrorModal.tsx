import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./ErrorModal.module.css";
type Props = {
  errorText: string;
  closeBtnFun: () => void;
};

function ErrorModal({ errorText, closeBtnFun }: Props) {
  return (
    <div className={styles.error_modal_wrapper}>
      <div className={styles.error_message_wrapper}>
        <div className={styles.message}>
          <Span
            color="#ff0000"
            onClickSpan={() => {}}
            style="display_block"
            text={errorText}
          />
        </div>
        <div className={styles.img}></div>
        <div className={styles.errorModal_button_wrapper}>
          <Button
            dataTestid=""
            onClick={() => {
              closeBtnFun();
            }}
            text="閉じる"
            type="button"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
