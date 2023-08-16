import Img from "../../../atoms/Img/Img";
import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./RequestButtonModal.module.css";
type Props = {
  text: string;
};
function RequestButtonModal({ text }: Props) {
  return (
    <div className={styles.overlay}>
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
          <div className={styles.img}>
            <Img
              alt="タイトルロゴ"
              src="../../../../../public/Modals/RequestModal/RequestModal_img.png"
              style=""
            />
          </div>
        </div>
        <div className={styles.body_under}>
          <div className={styles.content}>
            <Button dataTestid="" onClick={() => {}} text="OK" type="button" />
          </div>
          <div className={styles.content}>
            <Button dataTestid="" onClick={() => {}} text="NO" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestButtonModal;
