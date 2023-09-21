import Span from "../../../atoms/Span/Span";
import styles from "./PaidTime.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";

type Props = {
  PaidTime: string;
  disabled: boolean;
};

function PaidTime({ PaidTime, disabled }: Props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="取&nbsp;得&nbsp;時&nbsp;間&nbsp;有&nbsp;給"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.select_wrapp}>
          <select
            className={styles.select}
            onChange={(event) => {
              dispatch(Reducer.setPaidTime(event.target.value));
            }}
            value={PaidTime}
            disabled={disabled}
          >
            <option className={styles.options} value="00:00:00">
              0&nbsp;時間
            </option>
            <option className={styles.options} value="01:00:00">
              1&nbsp;時間
            </option>
            <option className={styles.options} value="02:00:00">
              2&nbsp;時間
            </option>
            <option className={styles.options} value="03:00:00">
              3&nbsp;時間
            </option>
            <option className={styles.options} value="04:00:00">
              4&nbsp;時間
            </option>
            <option className={styles.options} value="05:00:00">
              5&nbsp;時間
            </option>
            <option className={styles.options} value="06:00:00">
              6&nbsp;時間
            </option>
            <option className={styles.options} value="07:00:00">
              7&nbsp;時間
            </option>
          </select>
        </div>
        <div className={styles.attention_comment}>
          <span>"時有給"を取得した場合にのみ取得時間を入力してください。</span>
        </div>
      </div>
    </div>
  );
}

export default PaidTime;
