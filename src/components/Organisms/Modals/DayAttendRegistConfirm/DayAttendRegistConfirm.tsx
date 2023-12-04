import Span from "../../../atoms/Span/Span";
import ModalButton from "../../../atoms/button/ModalButton/ModalButton";
import styles from "./DayAttendRegistConfirm.module.css";
import { gsap } from "gsap";
import CompletModal from "../CompletModal/CompletModal";
type Props = {
  registData: any;
  okBtnFunProps: () => void;
  noBtnFunProps: () => void;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function DayAttendRegistConfirm({
  registData,
  okBtnFunProps,
  noBtnFunProps,
  setIsModal,
}: Props) {
  function okBtnClick() {
    gsap.to(".DayAttendRegistConfirm", {
      duration: 0.5,
      delay: 1.2,
      opacity: 0,
    });
    setTimeout(() => {
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
    }, 300);
  }

  function setDate(date: string) {
    if (date === "一括設定中") return "一括設定中";
    return `${date.slice(0, 4)}年 ${date.slice(5, 7)}月 ${date.slice(8, 10)}日`;
  }
  return (
    <>
      <div
        id="overlay"
        className={`${styles.overlay} cancel_animation DayAttendRegistConfirm`}
      >
        <div className={styles.modal_body}>
          <div className={styles.body_top}>
            <div className={styles.text}>
              <Span
                color="#F9F4FC"
                onClickSpan={() => {}}
                style="display_block"
                text={"下記内容で登録してよろしいですか？"}
              />
            </div>
            <div className={styles.confirm_list_wrapper}>
              <ul>
                <li>
                  対象日：
                  <span className={styles.li_span}>
                    {setDate(registData.date)}
                  </span>
                </li>
                <li className={styles.li}>
                  勤務状況：
                  <span className={styles.li_span}>
                    {registData.attendance_type}
                  </span>
                </li>
                <li>
                  勤務開始&nbsp;予定時間：
                  <span className={styles.li_span}>
                    {registData.default_start_time.slice(0, 2)}時&nbsp;
                    {registData.default_start_time.slice(3, 5)}分
                  </span>
                </li>
                <li>
                  勤務終了&nbsp;予定時間：
                  <span className={styles.li_span}>
                    {registData.default_end_time.slice(0, 2)}時&nbsp;
                    {registData.default_end_time.slice(3, 5)}分
                  </span>
                </li>
                <li>
                  勤務開始&nbsp;実施時間：
                  <span className={styles.li_span}>
                    {registData.start_time.slice(0, 2)}時&nbsp;
                    {registData.start_time.slice(3, 5)}分
                  </span>
                </li>
                <li>
                  勤務終了&nbsp;実施時間：
                  <span className={styles.li_span}>
                    {registData.end_time.slice(0, 2)}時&nbsp;
                    {registData.end_time.slice(3, 5)}分
                  </span>
                </li>
                <li>
                  出欠状況：
                  <span className={styles.li_span}>
                    {registData.attendance_state}
                  </span>
                </li>
                <li>
                  取得時間有給：
                  <span className={styles.li_span}>
                    {registData.paid_time.slice(0, 2)}時間
                  </span>
                </li>
                <li>
                  休憩時間：
                  <span className={styles.li_span}>
                    {registData.break_time.slice(0, 2)}時間
                  </span>
                </li>
                <li>
                  コメント：
                  <span className={styles.li_span}>{registData.comment}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.body_under}>
            <div className={styles.botton_wrapp}>
              <ModalButton
                dataTestId=""
                imgAlt="OKボタン"
                imgSrc="/Modals/Ok.png"
                onClick={() => {
                  okBtnFunProps(), okBtnClick();
                }}
                type="button"
              />
            </div>
            <div className={styles.botton_wrapp}>
              <ModalButton
                dataTestId=""
                imgAlt="NOボタン"
                imgSrc="/Modals/NO.png"
                onClick={() => {
                  noBtnFunProps(), noBtnClick();
                }}
                type="button"
              />
            </div>
          </div>
        </div>
        <CompletModal imgURL="/Modals/RegistConfirm.png" />
      </div>
    </>
  );
}

export default DayAttendRegistConfirm;
