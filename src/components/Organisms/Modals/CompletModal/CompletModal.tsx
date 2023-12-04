import Span from "../../../atoms/Span/Span";
import styles from "./CompletModal.module.css";
import { gsap } from "gsap";
import { Stats, homeSliceReducers } from "../../../../features/homeSlice";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  imgURL: string;
};

function CompletModal({ imgURL }: Props) {
  const { CompletedModalState } = useSelector(Stats);
  const dispatch = useDispatch();
  if (CompletedModalState.toggleModal) {
    gsap.set(".edit_completed", { display: "grid", opacity: 0 });
    gsap
      .timeline()
      .to(".edit_completed", {
        duration: 0.4,
        opacity: 1,
      })
      .to(".edit_completed", {
        duration: 0.4,
        delay: 1,
        opacity: 0,
        onComplete: () => {
          gsap.set(".edit_completed", { display: "none" });
          dispatch(
            homeSliceReducers.toggleCompletedModal({
              toggleModal: false,
              message: "",
            })
          );
        },
      });
  }

  return (
    <div className={`${styles.completed_modal_wrapper} edit_completed`}>
      <div className={styles.completed_message_wrapper}>
        <div className={styles.message}>
          <Span
            color="#F9F4FC"
            onClickSpan={() => {}}
            style="display_block"
            text={CompletedModalState.message}
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
