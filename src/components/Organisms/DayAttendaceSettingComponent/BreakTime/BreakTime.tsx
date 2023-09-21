import Span from "../../../atoms/Span/Span";
import styles from "./BreakTime.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";

type Props = {
  breakTime: string;
  disabled: boolean;
};

function BreakTime({ breakTime, disabled }: Props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="休&nbsp;憩&nbsp;時&nbsp;間"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.break_time}>
          <input
            type="time"
            className={styles.start_time}
            onChange={(event) =>
              dispatch(Reducer.setBreakTime(event.target.value))
            }
            value={breakTime}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default BreakTime;
