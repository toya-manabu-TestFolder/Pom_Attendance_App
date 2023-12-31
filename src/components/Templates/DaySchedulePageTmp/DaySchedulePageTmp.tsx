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
import { homeSliceReducers } from "../../../features/homeSlice";
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
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { useLocation } from "react-router-dom";

function DaySchedulePageTmp() {
  const dispatch = useDispatch();
  const Location = useLocation();
  const {
    editedDayAttendanceData,
    errorOfBtnDisable,
    canApprovalRequest,
    errorMessage,
    isError,
  } = useSelector(State);
  const [isRegistConfirm, setIsRegistConfirm] = useState(false);
  const [isUpdateConfirm, setIsUpdateConfirm] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(homeSliceReducers.toggleLoading(false));
    const sendData = {
      toDay: Location.state.toDay,
    };
    (async function () {
      await dispatch(getDayAttendanceData(sendData));
    })();
    setTimeout(() => {
      dispatch(homeSliceReducers.toggleLoading(true));
    }, 0);
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
              <img
                className={styles.calendar_img}
                src="/DaySchedulePage/calendar_img.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.body_right}>
            <div className={styles.day_attendance_setting_section}>
              <div className={styles.day_attendance_setting_button_wrapper}>
                {!editedDayAttendanceData.approvel_request_state &&
                  (editedDayAttendanceData.regist_state === "登録済み" ? (
                    <div className={styles.day_attendance_setting_button}>
                      <RequestButton
                        dataTestid=""
                        onClick={() => {
                          setIsUpdateConfirm(true);
                        }}
                        style=""
                        text="&nbsp;登録内容変更&nbsp;"
                        type="button"
                        disabled={errorOfBtnDisable}
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
                        disabled={errorOfBtnDisable}
                      />
                    </div>
                  ))}

                {!editedDayAttendanceData.approvel_request_state && (
                  <div className={styles.day_attendance_setting_button}>
                    <RequestButton
                      dataTestid=""
                      onClick={() => {
                        if (
                          editedDayAttendanceData.regist_state === "登録済み"
                        ) {
                          setIsModal(true);
                        } else {
                          dispatch(
                            Reducer.openErrorModal("予定登録してください！！")
                          );
                        }
                      }}
                      style=""
                      text="&nbsp;承認依頼&nbsp;"
                      type="button"
                      disabled={errorOfBtnDisable}
                    />
                  </div>
                )}

                {editedDayAttendanceData.approvel_request_state && (
                  <div className={styles.day_attendance_setting_button}>
                    <RequestButton
                      dataTestid=""
                      onClick={() => {}}
                      style=""
                      text="&nbsp;承認依頼取消し&nbsp;"
                      type="button"
                      disabled={errorOfBtnDisable}
                    />
                  </div>
                )}
              </div>

              <div className={styles.edit_section}>
                <div className={styles.title_wrapper}>
                  <H2_Ver2 text="日次勤怠入力一覧" />
                </div>
                <div className={styles.day_attendance_setting_wrapper}>
                  <div className={styles.day_attendance_setting}>
                    <SettingDay toDay={editedDayAttendanceData.date} />
                  </div>
                  <div className={styles.day_attendance_setting}>
                    <SettingState
                      registState={
                        editedDayAttendanceData.approvel_request_state
                          ? "承認依頼済み"
                          : editedDayAttendanceData.regist_state
                      }
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {isRegistConfirm && (
        <DayAttendRegistConfirm
          registData={editedDayAttendanceData}
          okBtnFunProps={async () => {
            const Result = await dispatch(
              registDayAttendData(editedDayAttendanceData)
            );
            if (Result.payload.status === 200) {
              dispatch(
                homeSliceReducers.toggleCompletedModal({
                  toggleModal: true,
                  message: "登録が完了しました！！",
                })
              );
            }
          }}
          noBtnFunProps={() => {}}
          setIsModal={setIsRegistConfirm}
        />
      )}
      {isUpdateConfirm && (
        <DayAttendRegistConfirm
          registData={editedDayAttendanceData}
          okBtnFunProps={async () => {
            const Result = await dispatch(
              updateDayAttendData(editedDayAttendanceData)
            );
            if (Result.payload.status === 200) {
              dispatch(
                homeSliceReducers.toggleCompletedModal({
                  toggleModal: true,
                  message: "登録変更が完了しました！！",
                })
              );
            }
          }}
          noBtnFunProps={() => {}}
          setIsModal={setIsUpdateConfirm}
        />
      )}
      {isModal && (
        <RequestModal
          okBtnFunProps={async () => {
            const Result = await dispatch(
              approvalRequestDayAttendData(editedDayAttendanceData)
            );
            if (Result.payload.status === 200) {
              dispatch(
                homeSliceReducers.toggleCompletedModal({
                  toggleModal: true,
                  message: "承認申請が完了しました！！",
                })
              );
            }
          }}
          noBtnFunProps={() => {}}
          text="承認申請してよろしいですか？"
          complitedText="承認申請を完了しました！！"
          errorText="通信エラーが発生しました。"
          setIsModal={setIsModal}
          isError={canApprovalRequest}
        />
      )}
      <ErrorModal
        toggleModal={isError}
        errorText={errorMessage}
        closeBtnFun={() => {
          dispatch(Reducer.closeErrorModal());
        }}
      />
      <LoadingPage />
    </>
  );
}

export default DaySchedulePageTmp;
