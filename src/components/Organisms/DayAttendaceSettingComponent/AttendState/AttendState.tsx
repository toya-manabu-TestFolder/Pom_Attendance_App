import Span from "../../../atoms/Span/Span";
import styles from "./AttendState.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";

type Props = {
  attendState: string;
  disabled: boolean;
};

function AttendState({ attendState, disabled }: Props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="出&nbsp;欠&nbsp;状&nbsp;況"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.attend_type}>
          <select
            className={styles.attend_select}
            onChange={(event) =>
              dispatch(Reducer.setAttendState(event.target.value))
            }
            value={attendState}
            disabled={disabled}
          >
            <option className={styles.options} value="出勤">
              出勤
            </option>
            <option className={styles.options} value="欠勤">
              欠勤
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AttendState;
