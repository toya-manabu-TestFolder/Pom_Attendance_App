import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./ErrorModal.module.css";
import { gsap } from "gsap";

type Props = {
  errorText: string;
  closeBtnFun: () => void;
  toggleModal: boolean;
};

const ErrorModal = ({ errorText, closeBtnFun, toggleModal }: Props) => {
  if (toggleModal) {
    gsap.set("#ErrorModal", { display: "grid", opacity: 0 });
    gsap.to("#ErrorModal", {
      duration: 0.3,
      opacity: 1,
    });
  }
  function BtnFun() {
    gsap.to("#ErrorModal", {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        gsap.set("#ErrorModal", { display: "none" });
        closeBtnFun();
      },
    });
  }

  return (
    <div id="ErrorModal" className={styles.error_modal_wrapper}>
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
              BtnFun();
            }}
            text="閉じる"
            type="button"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
