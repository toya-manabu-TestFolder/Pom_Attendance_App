import Span from "../../../atoms/Span/Span";
import styles from "./DisplayMonth.module.scss";
import { MonthScheduleState } from "../../../../features/MonthScheduleSlice";
import { useSelector } from "react-redux";

function DisplayMonth() {
  const { startDay, lastDay } = useSelector(MonthScheduleState);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="表&nbsp;示&nbsp;中&nbsp;の&nbsp;期&nbsp;間"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.start_day}>
          <Span
            color="#F9F4FC"
            onClickSpan={() => {}}
            style="display_block"
            text={`${startDay.slice(0, 4)}年 ${startDay.slice(
              5,
              7
            )}月 ${startDay.slice(8, 10)}日 ～`}
          />
        </div>
        <div className={styles.end_day}>
          <Span
            color="#F9F4FC"
            onClickSpan={() => {}}
            style="display_block"
            text={`${lastDay.slice(0, 4)}年 ${lastDay.slice(
              5,
              7
            )}月 ${lastDay.slice(8, 10)}日`}
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayMonth;
