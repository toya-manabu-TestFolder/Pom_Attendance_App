import Calendar from "../../Organisms/Calendar/Calendar";
import Headers from "../../Organisms/Headers/Headers";
import styles from "./DaySchedulePageTmp.module.css";
import {
  Reducer,
  getDayAttendanceData,
  registDayAttendData,
  approvalRequestDayAttendData,
  State,
  updateDayAttendData,
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
import RequestModal from "../../Organisms/Modals/RequestModal/RequestModal";
import ErrorModal from "../../Organisms/Modals/ErrorModal/ErrorModal";

function DaySchedulePageTmp() {
  const dispatch = useDispatch();
  const DayAttendanceState = useSelector(State);
  const DayAttendanceData = DayAttendanceState.editedDayAttendanceData;
  const [isRegistConfirm, setIsRegistConfirm] = useState(false);
  const [isUpdateConfirm, setIsUpdateConfirm] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isApprovalReqError, setIsApprovalReqError] = useState(false);

  useEffect(() => {
    const toDay = new Date();
    const Year = toDay.getFullYear();
    const Month = "0" + (toDay.getMonth() + 1);
    const date = "0" + toDay.getDate();

    const sendData = {
      toDay: `${Year + "-" + Month.slice(-2) + "-" + date.slice(-2)}`,
    };
    (async function () {
      await dispatch(getDayAttendanceData(sendData));
    })();
  }, []);
  return (
    <>
      <div className={styles.DaySchedulePageTmp}>
        <Headers />
        <div className={styles.body}>
          <div className={styles.body_left}>
            <div className={styles.calendar_wrapp}>
              <Calendar />
            </div>
            <div className={styles.calendar_img_wrapper}>
              <div className={styles.calendar_img}></div>
            </div>
          </div>
          <div className={styles.body_right}>
            <div className={styles.day_attendance_setting_section}>
              <div className={styles.day_attendance_setting_button_wrapper}>
                {!DayAttendanceData.approvel_request_state &&
                  (DayAttendanceData.regist_state === "登録済み" ? (
                    <div className={styles.day_attendance_setting_button}>
                      <RequestButton
                        dataTestid=""
                        onClick={() => {
                          setIsUpdateConfirm(true);
                        }}
                        style=""
                        text="&nbsp;登録内容変更&nbsp;"
                        type="button"
                        disabled={DayAttendanceState.errorOfBtnDisable}
                      />
                    </div>
                  ) : (
                    <div className={styles.day_attendance_setting_button}>
                      <RequestButton
                        dataTestid=""
                        onClick={() => {
                          setIsRegistConfirm(true);
                        }}
                        style=""
                        text="&nbsp;予定登録&nbsp;"
                        type="button"
                        disabled={DayAttendanceState.errorOfBtnDisable}
                      />
                    </div>
                  ))}

                {!DayAttendanceData.approvel_request_state && (
                  <div className={styles.day_attendance_setting_button}>
                    <RequestButton
                      dataTestid=""
                      onClick={() => {
                        if (DayAttendanceData.regist_state === "登録済み") {
                          setIsModal(true);
                        } else {
                          setIsApprovalReqError(true);
                        }
                      }}
                      style=""
                      text="&nbsp;承認依頼&nbsp;"
                      type="button"
                      disabled={DayAttendanceState.errorOfBtnDisable}
                    />
                  </div>
                )}
                {DayAttendanceData.approvel_request_state && (
                  <div className={styles.day_attendance_setting_button}>
                    <RequestButton
                      dataTestid=""
                      onClick={() => {}}
                      style=""
                      text="&nbsp;承認依頼取消し&nbsp;"
                      type="button"
                      disabled={DayAttendanceState.errorOfBtnDisable}
                    />
                  </div>
                )}
              </div>

              <div className={styles.title_wrapper}>
                <H2_Ver2 text="日次勤怠入力一覧" />
              </div>
              <div className={styles.day_attendance_setting_wrapper}>
                <div className={styles.day_attendance_setting}>
                  <SettingDay toDay={DayAttendanceData.date} />
                </div>
                <div className={styles.day_attendance_setting}>
                  <SettingState
                    registState={
                      DayAttendanceData.approvel_request_state
                        ? "承認依頼済み"
                        : DayAttendanceData.regist_state
                    }
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <SettingShift
                    endTime={DayAttendanceData.default_end_time}
                    registState={DayAttendanceData.attendance_type}
                    startTime={DayAttendanceData.default_start_time}
                    disabled={DayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <AttendTime
                    endTime={DayAttendanceData.end_time}
                    startTime={DayAttendanceData.start_time}
                    disabled={DayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <AttendState
                    attendState={DayAttendanceData.attendance_state}
                    disabled={DayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <PaidTime
                    PaidTime={DayAttendanceData.paid_time}
                    disabled={DayAttendanceData.approvel_request_state}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <BreakTime
                    breakTime={DayAttendanceData.break_time}
                    disabled={DayAttendanceData.approvel_request_state}
                  />
                </div>

                <div className={styles.day_attendance_setting}>
                  <TotalTime
                    attendStartTime={DayAttendanceData.start_time}
                    attendEndTime={DayAttendanceData.end_time}
                    breakTime={DayAttendanceData.break_time}
                  />
                </div>
                <div className={styles.day_attendance_setting}>
                  <Comment
                    Comment={DayAttendanceData.comment}
                    disabled={DayAttendanceData.approvel_request_state}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isRegistConfirm && (
        <DayAttendRegistConfirm
          registData={DayAttendanceData}
          okBtnFunProps={() => {
            dispatch(registDayAttendData(DayAttendanceData));
          }}
          noBtnFunProps={() => {}}
          setIsModal={setIsRegistConfirm}
        />
      )}
      {isUpdateConfirm && (
        <DayAttendRegistConfirm
          registData={DayAttendanceData}
          okBtnFunProps={() => {
            dispatch(updateDayAttendData(DayAttendanceData));
          }}
          noBtnFunProps={() => {}}
          setIsModal={setIsUpdateConfirm}
        />
      )}
      {isModal && (
        <RequestModal
          okBtnFunProps={() => {
            dispatch(approvalRequestDayAttendData(DayAttendanceData));
          }}
          noBtnFunProps={() => {}}
          text="承認申請してよろしいですか？"
          complitedText="承認申請を完了しました！！"
          errorText="通信エラーが発生しました。"
          setIsModal={setIsModal}
          isError={DayAttendanceState.canApprovalRequest}
        />
      )}
      {isApprovalReqError && (
        <ErrorModal
          errorText={"予定登録してください！！"}
          closeBtnFun={() => {
            setIsApprovalReqError(false);
          }}
        />
      )}
      {DayAttendanceState.isError && (
        <ErrorModal
          errorText={DayAttendanceState.errorMessage}
          closeBtnFun={() => {
            dispatch(Reducer.closeErrorModal());
          }}
        />
      )}
    </>
  );
}

export default DaySchedulePageTmp;
