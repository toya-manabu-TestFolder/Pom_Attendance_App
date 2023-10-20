import { useEffect } from "react";
import Span from "../../../atoms/Span/Span";
import styles from "./CompletModal.module.css";
import { useDispatch } from "react-redux";
import { homeSliceReducers } from "../../../../features/homeSlice";
import { gsap } from "gsap";

type Props = {
  text: string;
  imgURL: string;
};

function CompletModal({ text, imgURL }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    gsap.to(".edit_completed", {
      duration: 0.5,
      delay: 1.2,
      opacity: 0,
    });
    setTimeout(() => {
      dispatch(
        homeSliceReducers.toggleCompletedModal({
          toggleModal: false,
          message: "",
        })
      );
    }, 1700);
  }, []);

  return (
    <div className={`${styles.completed_modal_wrapper} edit_completed`}>
      <div className={styles.completed_message_wrapper}>
        <div className={styles.message}>
          <Span
            color="#F9F4FC"
            onClickSpan={() => {}}
            style="display_block"
            text={text}
          />
        </div>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${imgURL})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default CompletModal;
