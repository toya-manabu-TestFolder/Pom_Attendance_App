import Headers from "../../Organisms/Headers/Headers";
import H2_Ver2 from "../../atoms/h2/ver.2/h2";
import styles from "./MonthSchedulePageTmp.module.scss";
import {
  MonthScheduleReducers,
  MonthScheduleState,
  getMonthAttendanceData,
  postBundleApplovalRecuest,
} from "../../../features/MonthScheduleSlice";
import { homeSliceReducers, Stats } from "../../../features/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DisplayMonth from "../../Organisms/MonthAttendaceComponent/DisplayMonth/DisplayMonth";
import MonthSelect from "../../Organisms/MonthAttendaceComponent/MonthSelect/MonthSelect";
import MonthAttend from "../../Organisms/MonthAttendaceComponent/MonthAttend/MonthAttend";
import EditMonthAttend from "../../Organisms/MonthAttendaceComponent/EditMonthAttend/EditMonthAttend";
import CommentModal from "../../Organisms/MonthAttendaceComponent/CommentModal/CommentModal";
import RecuestModal2 from "../../Organisms/Modals/RecuestModal2/RecuestModal2";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import CompletModal from "../../Organisms/Modals/CompletModal/CompletModal";
import ErrorModal from "../../Organisms/Modals/ErrorModal/ErrorModal";
import Span from "../../atoms/Span/Span";

function MonthSchedulePageTmp() {
  let { startDay, lastDay, toggleCommentModal, bundleApplovalRecuest } =
    useSelector(MonthScheduleState);
  let { CompletedModalState, ErrorModalState } = useSelector(Stats);
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
    setTimeout(async () => {
      await dispatch(getMonthAttendanceData(startSendData));
      dispatch(homeSliceReducers.toggleLoading(true));
    }, 0);
  }, []);

  const approvalList = () => {
    const DayOfWeekArr = ["日", "月", "火", "水", "木", "金", "土"];

    return (
      <ul>
        {bundleApplovalRecuest.selectDays.map((day, index) => {
          let getDayOfWeek = DayOfWeekArr[new Date(day).getDate() - 1];
          let convertDay = `${day
            .replace("-", "年 ")
            .replace("-", "月 ")}日 (${getDayOfWeek})`;
          return (
            <li className={styles.bundle_approval_days} key={index}>
              <Span
                color="#24F454"
                onClickSpan={() => {}}
                style="display_block"
                text={convertDay}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const RecuestModal = async () => {
    dispatch(homeSliceReducers.toggleLoading(true));
    let Result = await dispatch(
      postBundleApplovalRecuest(bundleApplovalRecuest.selectDays)
    );
    if (Result.payload.status) {
      dispatch(
        homeSliceReducers.toggleCompletedModal({
          toggleModal: true,
          message: "一括承認申請を完了しました！！",
        })
      );
      await dispatch(
        getMonthAttendanceData({
          yearMonth: startDay.replace("-01", ""),
          startDay: startDay,
          lastDay: lastDay,
        })
      );
      dispatch(homeSliceReducers.toggleLoading(false));
    } else {
      dispatch(homeSliceReducers.toggleLoading(false));
      dispatch(
        homeSliceReducers.toggleErrorModal({
          toggleModal: true,
          message: "通信エラーが発生しました。",
        })
      );
    }
  };

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
      {toggleCommentModal.toggle && (
        <CommentModal Comment={toggleCommentModal.comment} disabled={true} />
      )}
      {bundleApplovalRecuest.modalToggle && (
        <RecuestModal2
          okBtnFunProps={() => {
            RecuestModal();
          }}
          noBtnFunProps={() => {}}
          text="下記日程を一括承認申請してよろしいですか？"
          setIsModal={() => {
            dispatch(MonthScheduleReducers.closeBundleApplovalModal());
          }}
          message={approvalList()}
        />
      )}
      {<LoadingPage />}
      {CompletedModalState.toggleModal && (
        <CompletModal
          imgURL="/Modals/RegistConfirm.png"
          text={CompletedModalState.message}
        />
      )}
      {ErrorModalState.toggleModal && (
        <ErrorModal
          errorText={ErrorModalState.message}
          closeBtnFun={() => {
            dispatch(
              homeSliceReducers.toggleErrorModal({
                toggleModal: false,
                message: "",
              })
            );
          }}
        />
      )}
    </>
  );
}

export default MonthSchedulePageTmp;
