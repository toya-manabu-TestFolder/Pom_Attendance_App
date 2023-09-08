import Calendar from "../../Organisms/Calendar/Calendar";
import Headers from "../../Organisms/Headers/Headers";
import styles from "./DaySchedulePageTmp.module.css";
import {
  // Reducer,
  getDayAttendanceData,
  State,
} from "../../../features/DayScheduleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import H2_Ver2 from "../../atoms/h2/ver.2/h2";
import SettingDay from "../../Organisms/DayAttendaceSettingComponent/SettingDay/SettingDay";
// import SettingState from "../../Organisms/DayAttendaceSettingComponent/SettingState/SettingState";
import SettingShift from "../../Organisms/DayAttendaceSettingComponent/SettingShift/SettingShift";
import AttendTime from "../../Organisms/DayAttendaceSettingComponent/AttendTime/AttendTime";
import AttendState from "../../Organisms/DayAttendaceSettingComponent/AttendState/AttendState";
import PaidTime from "../../Organisms/DayAttendaceSettingComponent/PaidTime/PaidTime";
import BreakTime from "../../Organisms/DayAttendaceSettingComponent/BreakTime/BreakTime";
import Comment from "../../Organisms/DayAttendaceSettingComponent/Comment/Comment";
import RequestButton from "../../atoms/button/RequestButton/RequestButton";

function DaySchedulePageTmp() {
  const dispatch = useDispatch();
  const DayAttendanceState = useSelector(State);
  const DayAttendanceData = DayAttendanceState.DayAttendanceData;
  useEffect(() => {
    const toDay = new Date();
    const Year = toDay.getFullYear();
    const Month = toDay.getMonth() + 1;
    const date = toDay.getDate();

    const sendData = {
      toDay: `${Year + "-" + Month + "-" + date}`,
      userId: Cookies.get("userId"),
    };
    (async function () {
      await dispatch(getDayAttendanceData(sendData));
    })();
  }, []);

  return (
    <div className={styles.DaySchedulePageTmp}>
      <Headers />
      <div className={styles.body}>
        <div className={styles.body_left}>
          <div className={styles.calendar_wrapp}>
            <Calendar />
          </div>
          <div className={styles.calendar_img}></div>
        </div>
        <div className={styles.body_right}>
          <div className={styles.day_attendance_setting_section}>
            <div className={styles.title_wrapper}>
              <H2_Ver2 text="日次勤怠入力一覧" />
            </div>
            <div className={styles.day_attendance_setting_wrapper}>
              <div className={styles.day_attendance_setting}>
                <SettingDay day="01" dayOfWeek="火" month="09" year="2023" />
              </div>
              <div className={styles.day_attendance_setting}>
                <SettingDay day="01" dayOfWeek="火" month="09" year="2023" />
              </div>
              <div className={styles.day_attendance_setting}>
                <SettingShift
                  endTime={DayAttendanceData.default_end_time}
                  registState={DayAttendanceData.attendance_type}
                  startTime={DayAttendanceData.default_start_time}
                />
              </div>
              <div className={styles.day_attendance_setting}>
                <AttendTime
                  endTime={DayAttendanceData.end_time}
                  startTime={DayAttendanceData.start_time}
                />
              </div>
              <div className={styles.day_attendance_setting}>
                <AttendState attendState={DayAttendanceData.attendance_type} />
              </div>
              <div className={styles.day_attendance_setting}>
                <PaidTime PaidTime={DayAttendanceData.paid_time} />
              </div>
              <div className={styles.day_attendance_setting}>
                <BreakTime breakTime={DayAttendanceData.break_time} />
              </div>

              <div className={styles.day_attendance_setting}>
                <SettingDay day="01" dayOfWeek="火" month="09" year="2023" />
              </div>
              <div className={styles.day_attendance_setting}>
                <Comment Comment={DayAttendanceData.comment} />
              </div>
            </div>
            <div className={styles.day_attendance_setting_button_wrapper}>
              <div className={styles.day_attendance_setting_button}>
                <RequestButton
                  dataTestid=""
                  onClick={() => {}}
                  style=""
                  text="&nbsp;予定登録&nbsp;"
                  type="button"
                  disabled={false}
                />
              </div>
              <div className={styles.day_attendance_setting_button}>
                <RequestButton
                  dataTestid=""
                  onClick={() => {}}
                  style=""
                  text="&nbsp;承認依頼&nbsp;"
                  type="button"
                  disabled={false}
                />
              </div>
              <div className={styles.day_attendance_setting_button}>
                <RequestButton
                  dataTestid=""
                  onClick={() => {}}
                  style=""
                  text="&nbsp;承認依頼取消し&nbsp;"
                  type="button"
                  disabled={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaySchedulePageTmp;
