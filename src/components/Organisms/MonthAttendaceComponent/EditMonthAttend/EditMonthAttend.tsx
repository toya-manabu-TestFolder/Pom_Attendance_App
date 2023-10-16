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
// randomUUIDはランダムなIDを生成する。
// レンダリングの外で生成することで、不変でランダムなIDを造れる。
// Kye Propsが正常に設定してなければ、無駄なレンダリングをしてしまう。
// indexを設定してしまうと、keyは0番目を永遠にIDとして認識してしまうため、
// これにより無駄な挙動が増えてしまう。

function EditMonthAttend() {
  let { MonthAttendList, uuid } = useSelector(MonthScheduleState);
  const dispatch = useDispatch();
  const CreateListTytle = (list: any) => {
    const ListTytle = [];
    for (const obj in list) {
      ListTytle.push(
        <li className={` ${styles.TytleStyle}`} key={obj}>
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
      <li className={`${styles.month_data_li} `} key={"選択" + index}>
        <input
          className={styles.checboxStyle}
          type="checkbox"
          checked={list.選択}
          onChange={(event) => {
            dispatch(
              MonthScheduleReducers.changeSelect([event.target.checked, index])
            );
          }}
        />
      </li>
    );
    for (const obj in list) {
      if (obj !== "選択" && obj !== "コメント") {
        List.push(
          <li
            className={`
          ${styles.month_data_li}
          ${styles.addStyle}
          ${
            (list[obj] === "登録済み" || list[obj] === "承認済み") &&
            styles.regiredStyle
          }
          ${list[obj] === "申請中" && styles.applyingStyle}
          `}
            key={obj + index}
          >
            <Span
              color={""}
              onClickSpan={() => {}}
              style="display_block"
              text={list[obj] === undefined ? "" : String(list[obj])}
            />
          </li>
        );
      }
    }
    List.push(
      <li
        className={`${styles.month_data_li} ${styles.ButtonStyle}`}
        key={"コメント" + index}
      >
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
            ${styles.month_data_ul}
            ${list["曜日"] === "土" && styles.saturday_stayle}
            ${list["曜日"] === "日" && styles.sunday_stayle}
            ${list["種類"] === "祝日" && styles.specialday_stayle}
            ${list["選択"] && styles.slecredStyle}
            `}
              key={uuid.month_data_ul[index]}
            >
              {!index && CreateListTytle(list)}
              {CreateList(list, index)}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EditMonthAttend;
