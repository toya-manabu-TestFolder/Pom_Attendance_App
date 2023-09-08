import Span from "../../../atoms/Span/Span";
import styles from "./SettingShift.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";

type Props = {
  registState: string;
  startTime: string;
  endTime: string;
};

function SettingShift({ registState, startTime, endTime }: Props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="勤&nbsp;務&nbsp;状&nbsp;況"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.shift_type}>
          <select
            className={styles.shift_select}
            onChange={(event) =>
              dispatch(Reducer.setShiftType(event.target.value))
            }
            defaultValue={registState}
          >
            <option className={styles.options} value="通常業務">
              通常業務
            </option>
            <option className={styles.options} value="休日出勤">
              休日出勤
            </option>
            <option className={styles.options} value="欠席">
              欠席
            </option>
            <option className={styles.options} value="特別休暇">
              特別休暇
            </option>
            <option className={styles.options} value="代休">
              代休
            </option>
          </select>
        </div>
        <div className={styles.shift_time}>
          <input
            type="time"
            className={styles.start_time}
            value={startTime}
            onChange={(event) =>
              dispatch(Reducer.setShiftStartTime(event.target.value))
            }
          />
          <span className={styles.time_space}>～</span>
          <input
            type="time"
            className={styles.end_time}
            value={endTime}
            onChange={(event) =>
              dispatch(Reducer.setShiftEndTime(event.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SettingShift;
