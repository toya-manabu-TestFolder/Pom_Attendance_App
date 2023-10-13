import Span from "../../../atoms/Span/Span";
import styles from "./EditMonthAttend.module.scss";
import {
  MonthScheduleState,
  MonthScheduleReducers,
} from "../../../../features/MonthScheduleSlice";
import { useDispatch, useSelector } from "react-redux";
import ListOperation from "./ListOperation/ListOperation";
import DataOperation from "./DataOperation/DataOperation";
import Button from "../../../atoms/button/Button";

function EditMonthAttend() {
  let { MonthAttendList } = useSelector(MonthScheduleState);
  const dispatch = useDispatch();
  // console.log(MonthAttendList);

  const CreateListTytle = (list: any) => {
    const ListTytle = [];
    for (const obj in list) {
      ListTytle.push(
        <li className={`${styles.month_data} ${styles.TytleStyle}`}>
          <Span
            color="#FBD13D"
            onClickSpan={() => {}}
            style="display_block"
            text={obj}
          />
        </li>
      );
    }
    return ListTytle;
  };
  const CreateList = (list: any, index: number) => {
    const List = [];
    List.push(
      <li className={`${styles.month_data} `}>
        <input
          className={styles.checboxStyle}
          type="checkbox"
          onChange={(event) => {
            MonthAttendList[0].選択 = true;
            console.log(MonthAttendList[0].選択);
          }}
        />
      </li>
    );
    for (const obj in list) {
      if (obj !== "選択" && obj !== "コメント") {
        List.push(
          <li
            className={`
          ${styles.month_data} 
          ${styles.addStyle}
          ${
            (list[obj] === "登録済み" || list[obj] === "承認済み") &&
            styles.regiredStyle
          }
          `}
          >
            <Span
              color={list[obj] === "祝日" ? "yellow" : "#F9F4FC"}
              onClickSpan={() => {}}
              style="display_block"
              text={list[obj] === undefined ? "" : String(list[obj])}
            />
          </li>
        );
      }
    }
    List.push(
      <li className={`${styles.month_data} ${styles.ButtonStyle}`}>
        <Button
          dataTestid=""
          onClick={() => {}}
          text="コメント"
          type="button"
          disabled={false}
        />
      </li>
    );
    return List;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="月&nbsp;次&nbsp;勤&nbsp;怠&nbsp;デ&nbsp;ー&nbsp;タ"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.operation_wrapper}>
          <ListOperation />
          <DataOperation />
        </div>
        <div className={styles.month_data_list_wrapper}>
          {MonthAttendList.map((list, index) => (
            <ul
              className={`
            ${styles.month_data_list}
            ${list["曜日"] === "土" && styles.saturday_stayle}
            ${list["曜日"] === "日" && styles.sunday_stayle}
            ${list["種類"] === "祝日" && styles.specialday_stayle}
            `}
            >
              {!index ? CreateListTytle(list) : CreateList(list, index)}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EditMonthAttend;
