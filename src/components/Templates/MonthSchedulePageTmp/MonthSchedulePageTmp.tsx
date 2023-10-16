import Headers from "../../Organisms/Headers/Headers";
import H2_Ver2 from "../../atoms/h2/ver.2/h2";
import styles from "./MonthSchedulePageTmp.module.scss";
import { getMonthAttendanceData } from "../../../features/MonthScheduleSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DisplayMonth from "../../Organisms/MonthAttendaceComponent/DisplayMonth/DisplayMonth";
import MonthSelect from "../../Organisms/MonthAttendaceComponent/MonthSelect/MonthSelect";
import MonthAttend from "../../Organisms/MonthAttendaceComponent/MonthAttend/MonthAttend";
import EditMonthAttend from "../../Organisms/MonthAttendaceComponent/EditMonthAttend/EditMonthAttend";

function MonthSchedulePageTmp() {
  const dispatch = useDispatch();
  useEffect(() => {
    const toDay = new Date();
    const Year = toDay.getFullYear();
    const Month = toDay.getMonth() + 1;
    const last = new Date(Year, Month, 0).getDate();
    const startSendData = {
      yearMonth: `${Year}-${Month}`,
      startDay: `${Year}-${Month}-01`,
      lastDay: `${Year}-${Month}-${last}`,
    };
    setTimeout(() => {
      dispatch(getMonthAttendanceData(startSendData));
    }, 0);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Headers />
      </div>
      <div className={styles.body}>
        <div className={styles.main_title}>
          <H2_Ver2 text="月次勤怠入力" />
        </div>
        <div className={styles.date_data_wrapper}>
          <div className={styles.month_select_wrapper}>
            <MonthSelect />
          </div>
          <div className={styles.period_month_wrapper}>
            <DisplayMonth />
          </div>
        </div>
        <div className={styles.attend_everydata_wrapper}>
          <MonthAttend />
        </div>
        <div className={styles.month_schedule_wrapper}>
          <EditMonthAttend />
        </div>
      </div>
      <div className={styles.footer}>
        <div
          className={styles.top_scroll_button_wrapper}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></div>
      </div>
    </>
  );
}

export default MonthSchedulePageTmp;
