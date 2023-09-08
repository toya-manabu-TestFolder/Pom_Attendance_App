import { useDispatch } from "react-redux";
import Span from "../../../atoms/Span/Span";
import styles from "./AttendTime.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";

type Props = {
  startTime: string;
  endTime: string;
};

function AttendTime({ startTime, endTime }: Props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="就&nbsp;業&nbsp;時&nbsp;刻"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.attend_time}>
          <input
            type="time"
            className={styles.start_time}
            value={startTime}
            onChange={(event) =>
              dispatch(Reducer.setAttendStartTime(event.target.value))
            }
          />
          <span className={styles.time_space}>～</span>
          <input
            type="time"
            className={styles.end_time}
            value={endTime}
            onChange={(event) =>
              dispatch(Reducer.setAttendEndTime(event.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AttendTime;
