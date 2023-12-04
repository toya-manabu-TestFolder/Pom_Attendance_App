import Span from "../../../atoms/Span/Span";
import styles from "./Comment.module.css";
import Button from "../../../atoms/button/Button";
import { useState } from "react";
import { gsap } from "gsap";
import CompletModal from "../../Modals/CompletModal/CompletModal";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";

type Props = {
  Comment: string;
  disabled: boolean;
};

function Comment({ Comment, disabled }: Props) {
  const [isModal, setIsModal] = useState(false);
  const [isEditComplet, setIsEditComplet] = useState(false);
  const [editComment, setEditComment] = useState("");
  const dispatch = useDispatch();

  function editCommentCompleted(editComment: string) {
    dispatch(Reducer.setComment(editComment));
    gsap.to(".edit_comment_completed", {
      duration: 0.5,
      delay: 1.2,
      opacity: 0,
    });
    setTimeout(() => {
      setIsEditComplet(false);
      setIsModal(false);
    }, 1700);
  }

  function cancelFun() {
    gsap.to(".cancel_animation", {
      duration: 0.2,
      opacity: 0,
    });
    setTimeout(() => {
      setIsModal(false);
    }, 300);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Span
            color="#FBD13D"
            onClickSpan={() => {}}
            style="display_block"
            text="コ&nbsp;メ&nbsp;ン&nbsp;ト"
          />
        </div>
        <div className={styles.body}>
          <div className={styles.comment_wrapper}>
            <div className={styles.comment}>
              {Comment === "" ? "コメントなし" : Comment}
            </div>
          </div>
          <div className={styles.comment_button_wrapper}>
            <div className={styles.comment_button}>
              <Button
                dataTestid=""
                onClick={() => {
                  setEditComment(Comment);
                  setIsModal(true);
                }}
                text="内容を確認する"
                type="button"
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>

      {isModal && (
        <div
          className={`${styles.modal_wrapper} edit_comment_completed cancel_animation`}
        >
          <div className={styles.modal_textarea_wrapper}>
            <textarea
              className={styles.modal_textarea}
              placeholder="コメントがあれば入力してください。"
              disabled={disabled}
              onChange={(event) => setEditComment(event.target.value)}
              value={editComment}
            ></textarea>
          </div>
          <div className={styles.modal_button_wrapper}>
            <div className={styles.modal_button}>
              <Button
                dataTestid=""
                onClick={() => {
                  setIsEditComplet(true);
                  setTimeout(() => {
                    editCommentCompleted(editComment);
                  }, 0);
                }}
                text="コメントを保存する"
                type="button"
                disabled={disabled}
              />
            </div>
            <div className={styles.modal_button}>
              <Button
                dataTestid=""
                onClick={() => {
                  cancelFun();
                }}
                text="編集をキャンセルする"
                type="button"
                disabled={false}
              />
            </div>
          </div>

          {isEditComplet && (
            <CompletModal imgURL="/Modals/comment_edit_comp.png" />
          )}
        </div>
      )}
    </>
  );
}

export default Comment;
