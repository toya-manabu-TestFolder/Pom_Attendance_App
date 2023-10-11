import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./MonthSelect.module.scss";
import {
  MonthScheduleState,
  MonthScheduleReducers,
  getMonthAttendanceData,
} from "../../../../features/MonthScheduleSlice";
import { useDispatch, useSelector } from "react-redux";

function MonthSelect() {
  const dispatch = useDispatch();
  const { selectMonth, startDay, lastDay } = useSelector(MonthScheduleState);

  function sendPeriod(selectMonth: string) {
    const sendData = {
      yearMonth: selectMonth,
      startDay: `${selectMonth}-01`,
      lastDay: `${selectMonth}-${new Date(
        Number(selectMonth.slice(0, 4)),
        Number(selectMonth.slice(5, 7)),
        0
      ).getDate()}`,
    };
    dispatch(getMonthAttendanceData(sendData));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="年&nbsp;月&nbsp;を&nbsp;選&nbsp;択"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.select_month_wrapper}>
          <input
            type="month"
            className={styles.select_month}
            onChange={(event) => {
              dispatch(MonthScheduleReducers.changeMonth(event.target.value));
            }}
            value={selectMonth}
            disabled={false}
          />
        </div>
        <div className={styles.select_button_wrapper}>
          <div className={styles.img}></div>
          <div className={styles.button}>
            <Button
              dataTestid=""
              onClick={() => {
                sendPeriod(selectMonth);
              }}
              text="再検索"
              type="button"
              disabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthSelect;
