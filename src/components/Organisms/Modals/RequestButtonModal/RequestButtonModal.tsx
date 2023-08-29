import { useEffect } from "react";
import Span from "../../../atoms/Span/Span";
import ModalButton from "../../../atoms/button/ModalButton/ModalButton";
import styles from "./RequestButtonModal.module.css";
import { gsap } from "gsap";
type Props = {
  text: string;
  okButton: () => void;
  noButton: () => void;
  toggle: boolean;
};

function RequestButtonModal({ text, okButton, noButton, toggle }: Props) {
  useEffect(() => {
    const duration = 0.4;
    if (toggle) {
      gsap.set("#overlay", { display: "flex" });
      gsap.to("#overlay", {
        duration: duration,
        opacity: 1,
      });
    } else {
      gsap.to("#overlay", {
        duration: duration,
        opacity: 0,
      });
      setTimeout(() => {
        gsap.set("#overlay", { display: "none" });
      }, duration * 1000);
    }
  }, [toggle]);

  return (
    <div id="overlay" className={styles.overlay}>
      <div className={styles.modal_body}>
        <div className={styles.body_top}>
          <div className={styles.text}>
            <Span
              color="#F9F4FC"
              onClickSpan={() => {}}
              style="display_block"
              text={text}
            />
          </div>
          <div className={styles.img}></div>
        </div>
        <div className={styles.body_under}>
          <div className={styles.botton_wrapp}>
            <ModalButton
              dataTestId=""
              imgAlt="OKボタン"
              imgSrc="/Modals/RequestModal/Ok.png"
              imgStyle="modalButton_anime"
              onClick={okButton}
              type="button"
            />
          </div>
          <div className={styles.botton_wrapp}>
            <ModalButton
              dataTestId=""
              imgAlt="NOボタン"
              imgSrc="/Modals/RequestModal/NO.png"
              imgStyle="modalButton_anime"
              onClick={noButton}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestButtonModal;
