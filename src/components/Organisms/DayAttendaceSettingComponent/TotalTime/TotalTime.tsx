import Span from "../../../atoms/Span/Span";
import styles from "./TotalTime.module.css";
import { Reducer } from "../../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

type Props = {
  attendStartTime: string;
  attendEndTime: string;
  breakTime: string;
};

function TotalTime({ attendStartTime, attendEndTime, breakTime }: Props) {
  const dispatch = useDispatch();

  const start = new Date(`2020-04-01 ${attendStartTime}`);
  const end = new Date(`2020-04-01 ${attendEndTime}`);
  const breaks = new Date(`2020-04-01 ${breakTime}`);
  const TotalSec = (end.getTime() - start.getTime()) / 1000;
  const TotalMin = Math.floor((TotalSec / 60) % 60);
  const TotalHour = Math.floor((TotalSec / 60 / 60) % 24);
  const TotalTime = `${("0" + (TotalHour - breaks.getHours())).slice(
    -2
  )} 時間 ${("0" + (TotalMin - breaks.getMinutes())).slice(-2)} 分`;
  useEffect(() => {
    dispatch(
      Reducer.setTotalTime(
        `${TotalTime.slice(0, 2) + ":" + TotalTime.slice(6, 8) + ":00"}`
      )
    );
  }, [TotalTime]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="就&nbsp;業&nbsp;時&nbsp;間&nbsp;合&nbsp;計"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.totaltime}>
          <Span
            color="#F9F4FC"
            onClickSpan={() => {}}
            style="display_block"
            text={TotalTime}
          />
        </div>
      </div>
    </div>
  );
}

export default TotalTime;
