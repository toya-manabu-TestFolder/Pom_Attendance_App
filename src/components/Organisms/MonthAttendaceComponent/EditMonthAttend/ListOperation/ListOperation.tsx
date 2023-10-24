import { useDispatch } from "react-redux";
import Span from "../../../../atoms/Span/Span";
import Button from "../../../../atoms/button/Button";
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
        <Button
          dataTestid=""
          onClick={() => {
            dispatch(MonthScheduleReducers.bundleSelect("承認"));
          }}
          text="未承認"
          type="button"
          disabled={false}
        />
        <Button
          dataTestid=""
          onClick={() => {
            dispatch(MonthScheduleReducers.bundleSelect("登録"));
          }}
          text="未登録(平日)"
          type="button"
          disabled={false}
        />
        <Button
          dataTestid=""
          onClick={() => {
            dispatch(MonthScheduleReducers.bundleSelect(""));
          }}
          text="選択解除"
          type="button"
          disabled={false}
        />
      </div>
    </div>
  );
}

export default ListOperation;
