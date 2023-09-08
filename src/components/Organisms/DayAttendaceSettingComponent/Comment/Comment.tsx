import Span from "../../../atoms/Span/Span";
import styles from "./Comment.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";
import Button from "../../../atoms/button/Button";
import { useState } from "react";
import { gsap } from "gsap";

type Props = {
  Comment: string;
};

function Comment({ Comment }: Props) {
  const [isModal, setIsModal] = useState(false);
  const [isEditComplet, setIsEditComplet] = useState(false);
  const [editComment, setEditCommetn] = useState(Comment);
  const dispatch = useDispatch();

  function editCommentCompleted() {
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
                  setIsModal(true);
                }}
                text="編集する"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
      <>
        {isModal ? (
          <>
            <div
              className={`${styles.modal_wrapper} edit_comment_completed cancel_animation`}
            >
              <div className={styles.modal_textarea_wrapper}>
                <textarea
                  className={styles.modal_textarea}
                  placeholder="コメントがあれば入力してください。"
                  disabled={false}
                  onChange={(event) => setEditCommetn(event.target.value)}
                >
                  {Comment}
                </textarea>
              </div>
              <div className={styles.modal_button_wrapper}>
                <div className={styles.modal_button}>
                  <Button
                    dataTestid=""
                    onClick={() => {
                      setIsEditComplet(true);
                      setTimeout(() => {
                        editCommentCompleted();
                      }, 0);
                    }}
                    text="コメントを保存する"
                    type="button"
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
                  />
                </div>
              </div>
              <>
                {isEditComplet ? (
                  <div className={styles.completed_modal_wrapper}>
                    <div className={styles.completed_message_wrapper}>
                      <div className={styles.message}>
                        <Span
                          color="#F9F4FC"
                          onClickSpan={() => {}}
                          style="display_block"
                          text="コメントを保存しました！！"
                        />
                      </div>
                      <div className={styles.img}></div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
}

export default Comment;
