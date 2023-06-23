import styles from "./CommentModal.module.scss";
import Button from "../../../atoms/button/Button";
import { useDispatch } from "react-redux";
import { MonthScheduleReducers } from "../../../../features/MonthScheduleSlice";

type Props = {
  Comment: string;
  disabled: boolean;
};

function CommentModal({ Comment, disabled }: Props) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.modal_wrapper} edit_comment_completed cancel_animation`}
    >
      <div className={styles.modal_textarea_wrapper}>
        <textarea
          className={styles.modal_textarea}
          disabled={disabled}
          value={Comment === undefined ? "コメントなし" : Comment}
        ></textarea>
      </div>
      <div className={styles.modal_button_wrapper}>
        <div className={styles.modal_button}>
          <Button
            dataTestid=""
            onClick={() => {
              dispatch(
                MonthScheduleReducers.ToggleCommentModal({
                  toggle: false,
                  comment: "",
                })
              );
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

export default CommentModal;
