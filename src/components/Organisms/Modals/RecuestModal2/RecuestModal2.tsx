import Span from "../../../atoms/Span/Span";
import ModalButton from "../../../atoms/button/ModalButton/ModalButton";
import styles from "./RecuestModal2.module.scss";
import { gsap } from "gsap";
type Props = {
  text: string;
  toggleModal: boolean;
  okBtnFunProps: () => void;
  noBtnFunProps: () => void;
  message: any;
};

const RecuestModal2 = ({
  text,
  toggleModal,
  okBtnFunProps,
  noBtnFunProps,
  message,
}: Props) => {
  if (toggleModal) {
    gsap.to("#RecuestModal2", {
      duration: 0.2,
      opacity: 1,
    });
    gsap.set("#RecuestModal2", { display: "flex" });
  } else {
    gsap.to("#RecuestModal2", {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        gsap.set("#RecuestModal2", { display: "none" });
      },
    });
  }

  return (
    <div id="RecuestModal2" className={styles.overlay}>
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
              }}
              type="button"
            />
          </div>
          <div className={styles.botton_wrapp}>
            <ModalButton
              dataTestId=""
              imgAlt="NOボタン"
              imgSrc="/Modals/NO.png"
              onClick={() => noBtnFunProps()}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuestModal2;
