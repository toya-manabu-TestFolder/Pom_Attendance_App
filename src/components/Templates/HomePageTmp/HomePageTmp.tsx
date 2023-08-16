import { useEffect, useState } from "react";
import { attendanceDataType } from "../../../types/types";
import Img from "../../atoms/Img/Img";
import Span from "../../atoms/Span/Span";
import Button from "../../atoms/button/Button";
import styles from "./HomePageTmp.module.css";
import RequestButton from "../../atoms/button/RequestButton/RequestButton";
import { Stats, homeSliceReducers } from "../../../features/homeSlice";
import { useDispatch, useSelector } from "react-redux";

type Props = attendanceDataType;

const HomePageTmp = ({ attendanceData }: Props) => {
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
  const dispatch = useDispatch();
  const homeSliceStats = useSelector(Stats);
  const startButtonDisabled = homeSliceStats.startButtonDisabled;
  return (
    <div className={styles.HomePateTmp_wrapp}>
      <div className={styles.employee_attend_wrapp}>
        <nav className={styles.nav}>
          <div className={styles.Home_link_wrapp} data-testid="Home-link">
            <Img
              alt="タイトルロゴ"
              src="../../../../public/navigation/titleLogo.png"
              style=""
            />
          </div>
          <div className={styles.login_user_wrapp} data-testid="login-user">
            <div className={styles.img_wrapp}>
              <Img
                alt="ログインしているユーザー名"
                src="../../../../public/navigation/loginUser.png"
                style="login_user"
              />
              <span className={styles.text}>
                こんにちは！{attendanceData.loginUser}さん！
              </span>
            </div>
          </div>
          <div className={styles.menu_button_wrapp} data-testid="menu-button">
            <div className={styles.menu_button}>
              <Button
                dataTestid=""
                onClick={() => {}}
                text="MENU"
                type="button"
              />
            </div>
          </div>
        </nav>

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
                      <div className={styles.img_wrapp}>
                        <Img
                          alt="空白"
                          src="../../../../public/navigation/space.png"
                          style=""
                        />
                      </div>
                    </div>
                    <>
                      {attendanceData.payds.map((payd) => (
                        <div className={styles.top_content}>
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
                      {attendanceData.payds.map((payd) => (
                        <div className={styles.under_content}>
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
            <div className={styles.now_time_info_wrapp} data-testid="time-now">
              <Img
                alt=""
                src="../../../../public/navigation/nowTime.png"
                style="now_time"
              />
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
              <div className={styles.title}>
                <Span
                  style=""
                  color="#fbd13d"
                  onClickSpan={() => {}}
                  text="打&nbsp;刻"
                />
              </div>
              <div className={styles.body}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <div className={styles.button}>
                      <RequestButton
                        dataTestid=""
                        disabled={startButtonDisabled}
                        onClick={() => {
                          dispatch(homeSliceReducers.startButtonFn());
                        }}
                        style=""
                        text="出勤"
                        type="button"
                      />
                    </div>
                    <div className={styles.img}>
                      <Img
                        alt=""
                        src="../../../../public/homepage/attendance_img1.png"
                        style=""
                      />
                    </div>
                  </div>
                  <div className={styles.right}></div>
                </div>
                <div className={styles.content}></div>
                <div className={styles.content}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageTmp;
