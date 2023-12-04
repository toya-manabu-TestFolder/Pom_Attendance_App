import { useDispatch } from "react-redux";
import Span from "../../../../atoms/Span/Span";
import styles from "./ListOperation.module.scss";
import { MonthScheduleReducers } from "../../../../../features/MonthScheduleSlice";
function ListOperation() {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="チ&nbsp;ェ&nbsp;ッ&nbsp;ク&nbsp;ボ&nbsp;ッ&nbsp;ク&nbsp;ス&nbsp;の&nbsp;一&nbsp;括&nbsp;制&nbsp;御"
        />
      </div>
      <div className={styles.body}>
        <select
          className={styles.select}
          onChange={(event) =>
            dispatch(MonthScheduleReducers.bundleSelect(event.target.value))
          }
          defaultValue={""}
        >
          <option className={styles.select_option} value="登録">
            未登録 (平日)
          </option>
          <option className={styles.select_option} value="承認">
            未承認 (登録済み)
          </option>
          <option className={styles.select_option} value="">
            全選択解除
          </option>
        </select>
      </div>
    </div>
  );
}

export default ListOperation;
