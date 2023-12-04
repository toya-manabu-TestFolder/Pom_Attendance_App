import { useState } from "react";
import Span from "../../../atoms/Span/Span";
import ModalButton from "../../../atoms/button/ModalButton/ModalButton";
import styles from "./RequestModal.module.css";
import { gsap } from "gsap";
import CompletModal from "../CompletModal/CompletModal";
import ErrorModal from "../ErrorModal/ErrorModal";
type Props = {
  text: string;
  complitedText: string;
  errorText: string;
  okBtnFunProps: () => void;
  noBtnFunProps: () => void;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
};

function RequestModal({
  text,
  errorText,
  okBtnFunProps,
  noBtnFunProps,
  setIsModal,
  isError,
}: Props) {
  const [isRegistComplet, setIsRegistComplet] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);

  function okBtnClick() {
    setIsRegistComplet(true);
    gsap.to(".RequestModal", {
      duration: 0.5,
      delay: 1.2,
      opacity: 0,
    });
    setTimeout(() => {
      setIsRegistComplet(false);
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
      setIsErrorModal(false);
    }, 300);
  }

  return (
    <div
      id="overlay"
      className={`${styles.overlay} RequestModal cancel_animation`}
    >
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
              imgSrc="/Modals/Ok.png"
              onClick={() => {
                okBtnFunProps();
                !isError ? setIsErrorModal(true) : okBtnClick();
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
      {isRegistComplet && <CompletModal imgURL="/Modals/RegistConfirm.png" />}
      <ErrorModal
        toggleModal={isErrorModal}
        errorText={errorText}
        closeBtnFun={() => {
          noBtnClick();
        }}
      />
    </div>
  );
}

export default RequestModal;
