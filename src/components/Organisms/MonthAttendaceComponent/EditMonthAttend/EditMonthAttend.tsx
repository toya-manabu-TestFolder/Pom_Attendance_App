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
import { getDayAttendanceData } from "../../../../features/DayScheduleSlice";
import { useNavigate } from "react-router-dom";
import { homeSliceReducers } from "../../../../features/homeSlice";
// randomUUIDはランダムなIDを生成する。
// レンダリングの外で生成することで、不変でランダムなIDを造れる。
// Kye Propsが正常に設定してなければ、無駄なレンダリングをしてしまう。
// indexを設定してしまうと、keyは0番目を永遠にIDとして認識してしまうため、
// これにより無駄な挙動が増えてしまう。

function EditMonthAttend() {
  let { MonthAttendList, uuid, selectMonth } = useSelector(MonthScheduleState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateListTytle = () => {
    const ListTytle = [];
    for (const obj in MonthAttendList[0]) {
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
      <li
        className={`
      ${styles.month_data_li} 
      ${list["曜日"] === "土" && styles.saturday_stayle}
      ${list["曜日"] === "日" && styles.sunday_stayle}
      ${list["種類"] === "祝日" && styles.specialday_stayle}
      ${list["選択"] && styles.slecredStyle}
      `}
        key={"選択" + index}
      >
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
          ${list["曜日"] === "土" && styles.saturday_stayle}
          ${list["曜日"] === "日" && styles.sunday_stayle}
          ${list["種類"] === "祝日" && styles.specialday_stayle}
          ${list["選択"] && styles.slecredStyle}
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
              onClickSpan={async () => {
                if (obj === "日付") {
                  await dispatch(
                    getDayAttendanceData({
                      toDay: `${selectMonth}-${list[obj].slice(3)}`,
                    })
                  );
                  dispatch(homeSliceReducers.toggleLoading(false));
                  navigate("/DaySchedule");
                }
              }}
              style={`display_block ${obj === "日付" && "Month_attend_day"}`}
              text={list[obj] === undefined ? "" : String(list[obj])}
            />
          </li>
        );
      }
    }
    List.push(
      <li
        className={`
        ${styles.month_data_li} 
        ${styles.ButtonStyle}
        ${list["曜日"] === "土" && styles.saturday_stayle}
        ${list["曜日"] === "日" && styles.sunday_stayle}
        ${list["種類"] === "祝日" && styles.specialday_stayle}
        ${list["選択"] && styles.slecredStyle}
        `}
        key={"コメント" + index}
      >
        <Button
          dataTestid=""
          onClick={() => {
            dispatch(
              MonthScheduleReducers.ToggleCommentModal({
                toggle: true,
                comment: list.コメント,
              })
            );
          }}
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
          <ul
            className={`
        ${styles.month_data_ul}
        `}
          >
            {CreateListTytle()}
          </ul>
          {MonthAttendList.map((list, index) => (
            <ul
              className={`
            ${styles.month_data_ul}
            `}
              key={uuid.month_data_ul[index]}
            >
              {CreateList(list, index)}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EditMonthAttend;
