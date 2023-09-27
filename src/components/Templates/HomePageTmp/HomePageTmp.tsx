import { useEffect, useState } from "react";
import { attendanceDataType } from "../../../types/types";
import Span from "../../atoms/Span/Span";
import styles from "./HomePageTmp.module.css";
import RequestButton from "../../atoms/button/RequestButton/RequestButton";
import { Stats, homeSliceReducers } from "../../../features/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import RequestModal from "../../Organisms/Modals/RequestModal/RequestModal";
import Box from "../../atoms/Box/Box";
import Headers from "../../Organisms/Headers/Headers";
type Props = attendanceDataType;

const HomePageTmp = ({ attendanceData }: Props) => {
  const dispatch = useDispatch();
  const homeSliceStats = useSelector(Stats);
  const [isModal, setIsModal] = useState(false);

  const [Year, setYear] = useState(0);
  const [Month, setMonth] = useState(0);
  const [Data, setData] = useState(0);
  const [Week, setWeek] = useState<string | undefined>("");
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Second, setSecond] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const nowTime = new Date();
      setYear(nowTime.getFullYear());
      setMonth(nowTime.getMonth() + 1);
      setData(nowTime.getDate());
      const WeekArr = ["日", "月", "火", "水", "木", "金", "土"];
      setWeek(WeekArr[nowTime.getDay()]);
      setHour(nowTime.getHours());
      setMinute(nowTime.getMinutes());
      setSecond(nowTime.getSeconds());
    }, 1000);
  }, []);

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
                      <>
                        {attendanceData.payds.map((payd, index) => (
                          <div className={styles.under_content} key={index}>
                            <Span
                              style=""
                              color="#F9F4FC"
                              onClickSpan={() => {}}
                              text={payd.value}
                            />
                          </div>
                        ))}
                      </>
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
                        text={`${Year}年 ${Month}月 ${Data}日 (${Week})`}
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
                    text="打&nbsp;刻"
                  />
                </div>
                <div className={styles.body_of_right_column}>
                  <div className={styles.content}>
                    <div className={styles.left_content}>
                      <div className={styles.button}>
                        <RequestButton
                          dataTestid=""
                          disabled={homeSliceStats.startButtonDesable}
                          onClick={() => setIsModal(true)}
                          style=""
                          text="出&nbsp;勤"
                          type="button"
                        />
                      </div>
                      <div className={styles.start_img}></div>
                    </div>
                    <div className={styles.right_content}>
                      <div className={styles.stanpTime_wrapp}>
                        <Box
                          element={
                            <div className="Time">
                              <Span
                                color="#F9F4FC"
                                onClickSpan={() => {}}
                                style="display_block"
                                text="09&nbsp;:&nbsp;00"
                              />
                            </div>
                          }
                          title="開始時間"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.left_content}>
                      <div className={styles.button}>
                        <RequestButton
                          dataTestid=""
                          disabled={homeSliceStats.startButtonDesable}
                          onClick={() => setIsModal(true)}
                          style=""
                          text="退&nbsp;勤"
                          type="button"
                        />
                      </div>
                      <div className={styles.end_img}></div>
                    </div>
                    <div className={styles.right_content}>
                      <div className={styles.stanpTime_wrapp}>
                        <Box
                          element={
                            <div className="Time">
                              <Span
                                color="#F9F4FC"
                                onClickSpan={() => {}}
                                style="display_block"
                                text="18&nbsp;:&nbsp;00"
                              />
                            </div>
                          }
                          title="終了時間"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.body_approvalbutton_wrapp}>
                    <div className={styles.approvalbutton_left_Img}></div>
                    <div className={styles.approvalbutton}>
                      <RequestButton
                        dataTestid=""
                        disabled={homeSliceStats.startButtonDesable}
                        onClick={() => {}}
                        style=""
                        text="承認申請"
                        type="button"
                      />
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
    </>
  );
};

export default HomePageTmp;
