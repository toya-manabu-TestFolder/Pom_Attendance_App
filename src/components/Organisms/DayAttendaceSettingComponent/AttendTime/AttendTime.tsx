import Span from "../../../atoms/Span/Span";
import styles from "./AttendTime.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";

type Props = {
  startTime: string;
  endTime: string;
  disabled: boolean;
};

function AttendTime({ startTime, endTime, disabled }: Props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="実&nbsp;就&nbsp;業&nbsp;時&nbsp;刻"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.attend_time}>
          <input
            type="time"
            className={styles.start_time}
            onChange={(event) =>
              dispatch(Reducer.setAttendStartTime(event.target.value))
            }
            value={startTime}
            disabled={disabled}
          />
          <span className={styles.time_space}>～</span>
          <input
            type="time"
            className={styles.end_time}
            onChange={(event) =>
              dispatch(Reducer.setAttendEndTime(event.target.value))
            }
            value={endTime}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default AttendTime;
