import Span from "../../../atoms/Span/Span";
import styles from "./MonthAttend.module.scss";
import { MonthScheduleState } from "../../../../features/MonthScheduleSlice";
import { useSelector } from "react-redux";

function MonthAttend() {
  const { allAtttendData, MonthAttendList } = useSelector(MonthScheduleState);
  const createList = () => {
    const result = [];
    for (let i = 0; i < 12; i++) {
      let attendType =
        Object.keys(allAtttendData)[i] === undefined
          ? "なし"
          : Object.keys(allAtttendData)[i];
      let attendValue =
        Object.values(allAtttendData)[i] === undefined
          ? "なし"
          : Object.values(allAtttendData)[i];
      result.push(
        <div className={styles.attend_data_warapper} key={i}>
          <div className={styles.attend_type}>
            <Span
              color="#FBD13D"
              onClickSpan={() => {}}
              style="display_block"
              text={attendType}
            />
          </div>
          <div className={styles.attend_value}>
            <Span
              color="#F9F4FC"
              onClickSpan={() => {}}
              style="display_block"
              text={attendValue}
            />
          </div>
        </div>
      );
    }
    return result;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text={`${MonthAttendList[0].日付.slice(0, 2)} 月 の 勤 怠 状 況`}
        />
      </div>
      <div className={styles.body}>{createList()}</div>
    </div>
  );
}

export default MonthAttend;
