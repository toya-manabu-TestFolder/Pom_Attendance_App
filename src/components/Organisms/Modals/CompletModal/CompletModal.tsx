import Span from "../../../atoms/Span/Span";
import styles from "./CompletModal.module.css";
type Props = {
  text: string;
  imgURL: string;
};

function CompletModal({ text, imgURL }: Props) {
  return (
    <div className={styles.completed_modal_wrapper}>
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
