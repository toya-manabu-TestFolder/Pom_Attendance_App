import Span from "../../../atoms/Span/Span";
import ModalButton from "../../../atoms/button/ModalButton/ModalButton";
import styles from "./RecuestModal2.module.scss";
import { gsap } from "gsap";
type Props = {
  text: string;
  okBtnFunProps: () => void;
  noBtnFunProps: () => void;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: any;
};

function RecuestModal2({
  text,
  okBtnFunProps,
  noBtnFunProps,
  setIsModal,
  message,
}: Props) {
  function okBtnClick() {
    gsap.to(".edit_completed", {
      duration: 0.5,
      delay: 1.2,
      opacity: 0,
    });
    setTimeout(() => {
      setIsModal(false);
    }, 1700);
  }

  function noBtnClick() {
    gsap.to(".cancel_animation", {
      duration: 0.2,
      opacity: 0,
    });
    setTimeout(() => {
      setIsModal(false);
    }, 300);
  }

  return (
    <div
      id="overlay"
      className={`${styles.overlay} edit_completed cancel_animation`}
    >
      <div className={styles.modal_body}>
        <div className={styles.body_top}>
          <div className={styles.message_wrapper}>
            <div className={styles.message_title}>
              <Span
                color="#F9F4FC"
                onClickSpan={() => {}}
                style="display_block"
                text={text}
              />
            </div>
            <div className={styles.message}>{message}</div>
          </div>
          <div className={styles.img}></div>
        </div>
        <div className={styles.body_under}>
          <div className={styles.botton_wrapp}>
            <ModalButton
              dataTestId=""
              imgAlt="OKボタン"
              imgSrc="/Modals/Ok.png"
              onClick={() => {
                okBtnFunProps();
                okBtnClick();
              }}
              type="button"
            />
          </div>
          <div className={styles.botton_wrapp}>
            <ModalButton
              dataTestId=""
              imgAlt="NOボタン"
              imgSrc="/Modals/NO.png"
              onClick={() => [noBtnFunProps(), noBtnClick()]}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecuestModal2;
