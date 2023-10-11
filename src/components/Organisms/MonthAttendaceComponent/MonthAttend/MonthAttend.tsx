import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./MonthAttend.module.scss";
import {
  MonthScheduleState,
  MonthScheduleReducers,
} from "../../../../features/MonthScheduleSlice";
import { useSelector } from "react-redux";

function MonthAttend() {
  const { allAtttendData } = useSelector(MonthScheduleState);
  console.log(allAtttendData);
  const test = () => {
    const result = [];
    for (const data in allAtttendData) {
      result.push(
        <div className={styles.attend_data_warapper}>
          <div className={styles.attend_type}>
            <Span
              color="#FBD13D"
              onClickSpan={() => {}}
              style="display_block"
              text={data}
            />
          </div>
          <div className={styles.attend_value}>
            <Span
              color="#F9F4FC"
              onClickSpan={() => {}}
              style="display_block"
              text={allAtttendData.data}
            />
          </div>
        </div>
      );
    }
    return result;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="勤&nbsp;怠&nbsp;状&nbsp;況"
        />
      </div>
      <div className={styles.body}>
        {test()}
        {/* {testArray.map((attendData, index) => (
          <div className={styles.attend_data_warapper} key={index}>
            <div className={styles.attend_type}>
              <Span
                color="#FBD13D"
                onClickSpan={() => {}}
                style="display_block"
                text={attendData.attendType}
              />
            </div>
            <div className={styles.attend_value}>
              <Span
                color="#F9F4FC"
                onClickSpan={() => {}}
                style="display_block"
                text={attendData.attendValue}
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default MonthAttend;
