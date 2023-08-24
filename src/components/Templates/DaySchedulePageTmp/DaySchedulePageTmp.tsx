import Headers from "../../Organisms/Headers/Headers";
import H2_Ver2 from "../../atoms/h2/ver.2/h2";
import styles from "./DaySchedulePageTmp.module.css";

function DaySchedulePageTmp() {
  return (
    <div className={styles.DaySchedulePageTmp}>
      <div className={styles.head}>
        <Headers loginUser="" />
      </div>
      <div className={styles.body}>
        <div className={styles.body_left}>
          <div className={styles.calendar_wrapp}>
            <div className={styles.calendar_title}>
              <H2_Ver2 text="カレンダー" />
            </div>
            <div className={styles.calendar_body_wrapp}>
              <div className={styles.calendar_body}></div>
            </div>
          </div>
          <div className={styles.img_wrapp}></div>
        </div>
        <div className={styles.body_right}></div>
      </div>
    </div>
  );
}

export default DaySchedulePageTmp;
