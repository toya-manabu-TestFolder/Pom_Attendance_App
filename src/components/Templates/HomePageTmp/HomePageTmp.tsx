import { useEffect, useState } from "react";
import { attendanceDataType } from "../../../types/types";
import Span from "../../atoms/Span/Span";
import styles from "./HomePageTmp.module.css";
import {
  Stats,
  homeSliceReducers,
  getUserAttendData,
} from "../../../features/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import RequestModal from "../../Organisms/Modals/RequestModal/RequestModal";
import Headers from "../../Organisms/Headers/Headers";
import { HomeSliceType } from "../../../types/types";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import TopPageAttendDataBox from "../../Molecules/TopPageAttendDataBox/TopPageAttendDataBox";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import H2_Ver2 from "../../atoms/h2/ver.2/h2";

type Props = attendanceDataType;

const HomePageTmp = ({ attendanceData }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toDay, userPaidData, userRegistData } = useSelector(Stats);
  const [isModal, setIsModal] = useState(false);
  const [Week, setWeek] = useState<string | undefined>("");
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Second, setSecond] = useState(0);

  useEffect(() => {
    dispatch(homeSliceReducers.toggleLoading(false));
    dispatch(homeSliceReducers.setToDay(""));
    dispatch(getUserAttendData());

    setInterval(() => {
      const nowTime = new Date();
      const WeekArr = ["日", "月", "火", "水", "木", "金", "土"];
      setWeek(WeekArr[nowTime.getDay()]);
      setHour(nowTime.getHours());
      setMinute(nowTime.getMinutes());
      setSecond(nowTime.getSeconds());
    }, 1000);
    setTimeout(() => {
      dispatch(homeSliceReducers.toggleLoading(true));
    }, 0);
  }, []);

  function setUserPaidDataEl(
    userPaidData: HomeSliceType["home"]["userPaidData"]
  ) {
    let ElArr = [];
    for (let data in userPaidData) {
      if (data !== "all_heve_time") {
        ElArr.push(
          <div className={styles.under_content} key={data}>
            <Span
              style=""
              color="#F9F4FC"
              onClickSpan={() => {}}
              text={userPaidData[data]}
            />
          </div>
        );
      }
    }
    return ElArr;
  }

  function setBackGroundColor(stateData: string) {
    if (stateData === "登録済み") return "#D1362E";
    if (stateData === "承認申請済み") return "#26d04c";
    return "";
  }
  return (
    <>
      <div className={styles.HomePateTmp_wrapp}>
        <div className={styles.employee_attend_wrapp}>
          <Headers />

          <section className={styles.attendance_operation}>
            <div className={styles.left_column}>
              <div
                className={styles.payd_info_wrapp}
                data-testid="payd-infomation"
              >
                <div className={styles.section_box}>
                  <div className={styles.title}>
                    <Span
                      style=""
                      color="#fbd13d"
                      onClickSpan={() => {}}
                      text="有&nbsp;給&nbsp;休&nbsp;暇"
                    />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.body_content}>
                      <div className={styles.top_content}>
                        <div className={styles.img_wrapp}></div>
                      </div>
                      <>
                        {attendanceData.payds.map((payd, index) => (
                          <div className={styles.top_content} key={index}>
                            <Span
                              style=""
                              color="#D04F2F"
                              onClickSpan={() => {}}
                              text={payd.title}
                            />
                          </div>
                        ))}
                      </>
                    </div>
                    <div className={styles.body_content}>
                      <div className={styles.under_content}>
                        <Span
                          style=""
                          color="#D04F2F"
                          onClickSpan={() => {}}
                          text="有給休暇"
                        />
                      </div>
                      <>{setUserPaidDataEl(userPaidData)}</>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.now_time_info_wrapp}
                data-testid="time-now"
              >
                <div className={styles.time_now}>
                  <div className={styles.top}>
                    <Span
                      style="time_now_top"
                      color="#fbd13d"
                      onClickSpan={() => {}}
                      text="TIME&nbsp;NOW"
                    />
                  </div>
                  <div className={styles.center}>
                    <div className={styles.center_content}>
                      <Span
                        style=""
                        color="#FFFEF6"
                        onClickSpan={() => {}}
                        text={`${toDay.slice(0, 4)}年 ${toDay.slice(
                          5,
                          7
                        )}月 ${toDay.slice(8, 10)}日 (${Week})`}
                      />
                    </div>
                  </div>
                  <div className={styles.under}>
                    <div className={styles.under_content}>
                      <Span
                        style=""
                        color="#D04F2F"
                        onClickSpan={() => {}}
                        text={`${Hour}時 ${Minute}分 ${Second}秒`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_column}>
              <div className={styles.attend_stanp_operation} data-testid="">
                <div className={styles.title_of_right_column}>
                  <Span
                    style=""
                    color="#fbd13d"
                    onClickSpan={() => {}}
                    text="今&nbsp;日&nbsp;の&nbsp;勤&nbsp;怠&nbsp;登&nbsp;録&nbsp;状&nbsp;況"
                  />
                </div>
                <div className={styles.body_of_right_column}>
                  {userRegistData.map((data) => (
                    <div
                      className={styles.TopPageAttendDataBox_Wrapper}
                      key={data.title}
                    >
                      <TopPageAttendDataBox
                        title={data.title}
                        registApprovalState={data.body}
                        BackGroundColor={setBackGroundColor(
                          userRegistData[0].body
                        )}
                      />
                    </div>
                  ))}

                  <div className={styles.body_approvalbutton_wrapp}>
                    <div className={styles.approvalbutton_left_Img}></div>
                    <div className={styles.approvalbutton}>
                      {userRegistData[0].body === "登録済み" && (
                        <Button
                          dataTestid=""
                          onClick={() => {
                            navigate("/DaySchedule", {
                              state: { toDay: toDay },
                            });
                          }}
                          text="承認確認へ"
                          type="button"
                          disabled={false}
                        />
                      )}
                      {userRegistData[0].body === "登録なし" && (
                        <Button
                          dataTestid=""
                          onClick={() => {
                            navigate("/DaySchedule", {
                              state: { toDay: toDay },
                            });
                          }}
                          text="登録ページへ"
                          type="button"
                          disabled={false}
                        />
                      )}
                      {userRegistData[0].body === "承認申請済み" && (
                        <H2_Ver2 text="承認待ち" />
                      )}
                    </div>
                    <div className={styles.approvalbutton_right_Img}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {isModal && (
        <RequestModal
          okBtnFunProps={() => {
            dispatch(homeSliceReducers.startOkFn());
          }}
          noBtnFunProps={() => {}}
          text="午前09:00で出勤登録してよろしいですか？"
          complitedText="出勤登録を完了しました！！"
          errorText=""
          setIsModal={setIsModal}
          isError={false}
        />
      )}
      <LoadingPage />
    </>
  );
};

export default HomePageTmp;
