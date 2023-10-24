import Headers from "../../Organisms/Headers/Headers";
import styles from "./BundleAttendEditPageTmp.module.scss";
import {
  Reducer,
  getDayAttendanceData,
  bundleRegist,
  State,
} from "../../../features/DayScheduleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import H2_Ver2 from "../../atoms/h2/ver.2/h2";
import SettingDay from "../../Organisms/DayAttendaceSettingComponent/SettingDay/SettingDay";
import SettingShift from "../../Organisms/DayAttendaceSettingComponent/SettingShift/SettingShift";
import AttendTime from "../../Organisms/DayAttendaceSettingComponent/AttendTime/AttendTime";
import AttendState from "../../Organisms/DayAttendaceSettingComponent/AttendState/AttendState";
import PaidTime from "../../Organisms/DayAttendaceSettingComponent/PaidTime/PaidTime";
import BreakTime from "../../Organisms/DayAttendaceSettingComponent/BreakTime/BreakTime";
import Comment from "../../Organisms/DayAttendaceSettingComponent/Comment/Comment";
import RequestButton from "../../atoms/button/RequestButton/RequestButton";
import SettingState from "../../Organisms/DayAttendaceSettingComponent/SettingState/SettingState";
import TotalTime from "../../Organisms/DayAttendaceSettingComponent/TotalTime/TotalTime";
import DayAttendRegistConfirm from "../../Organisms/Modals/DayAttendRegistConfirm/DayAttendRegistConfirm";
import ErrorModal from "../../Organisms/Modals/ErrorModal/ErrorModal";
import { MonthScheduleState } from "../../../features/MonthScheduleSlice";
import { useNavigate } from "react-router-dom";

function BundleAttendEditPageTmp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editedDayAttendanceData, errorOfBtnDisable, errorMessage, isError } =
    useSelector(State);
  const { selectDays } = useSelector(MonthScheduleState);
  const [isRegistConfirm, setIsRegistConfirm] = useState(false);

  useEffect(() => {
    const sendData = {
      toDay: selectDays[0],
    };
    (async function () {
      await dispatch(getDayAttendanceData(sendData));
      dispatch(Reducer.selectDay("一括設定中"));
    })();
  }, []);

  async function registBundleAttendData() {
    const result = await dispatch(
      bundleRegist({
        selectDays: selectDays,
        attendData: [editedDayAttendanceData],
      })
    );
    if (result.payload.status === 200) {
      setTimeout(() => {
        navigate("/MonthSchedule");
      }, 1500);
    }
  }

  return (
    <>
      <div className={styles.BundleAttendEditPageTmp}>
        <Headers />
        <div className={styles.body}>
          <div className={styles.body_right}>
            <div className={styles.day_attendance_setting_section}>
              <div className={styles.title_wrapper}>
                <H2_Ver2 text="一括登録設定" />
              </div>
              <div className={styles.day_attendance_setting_wrapper}>
                <div className={styles.day_attendance_setting}>
                  <SettingDay toDay="一括設定中" />
                </div>
                <div className={styles.day_attendance_setting}>
                  <SettingState
                    registState={editedDayAttendanceData.regist_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <SettingShift
                    endTime={editedDayAttendanceData.default_end_time}
                    registState={editedDayAttendanceData.attendance_type}
                    startTime={editedDayAttendanceData.default_start_time}
                    disabled={editedDayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <AttendTime
                    endTime={editedDayAttendanceData.end_time}
                    startTime={editedDayAttendanceData.start_time}
                    disabled={editedDayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <AttendState
                    attendState={editedDayAttendanceData.attendance_state}
                    disabled={editedDayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <PaidTime
                    PaidTime={editedDayAttendanceData.paid_time}
                    disabled={editedDayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <BreakTime
                    breakTime={editedDayAttendanceData.break_time}
                    disabled={editedDayAttendanceData.approvel_request_state}
                  />
                </div>

                <div className={styles.day_attendance_setting}>
                  <TotalTime
                    attendStartTime={editedDayAttendanceData.start_time}
                    attendEndTime={editedDayAttendanceData.end_time}
                    breakTime={editedDayAttendanceData.break_time}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <Comment
                    Comment={editedDayAttendanceData.comment}
                    disabled={editedDayAttendanceData.approvel_request_state}
                  />
                </div>
              </div>
              <div className={styles.day_attendance_setting_button_wrapper}>
                <RequestButton
                  dataTestid=""
                  onClick={() => {
                    setIsRegistConfirm(true);
                  }}
                  style=""
                  text="一&nbsp;括&nbsp;登&nbsp;録"
                  type="button"
                  disabled={errorOfBtnDisable}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isRegistConfirm && (
        <DayAttendRegistConfirm
          registData={editedDayAttendanceData}
          okBtnFunProps={() => {
            registBundleAttendData();
          }}
          noBtnFunProps={() => {}}
          setIsModal={setIsRegistConfirm}
        />
      )}
      {isError && (
        <ErrorModal
          errorText={errorMessage}
          closeBtnFun={() => {
            dispatch(Reducer.closeErrorModal());
          }}
        />
      )}
    </>
  );
}

export default BundleAttendEditPageTmp;
