import { useDispatch, useSelector } from "react-redux";
import Span from "../../../../atoms/Span/Span";
import Button from "../../../../atoms/button/Button";
import styles from "./DataOperation.module.scss";
import {
  MonthScheduleReducers,
  MonthScheduleState,
} from "../../../../../features/MonthScheduleSlice";
import ErrorModal from "../../../Modals/ErrorModal/ErrorModal";
import { useNavigate } from "react-router-dom";

function DataOperation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bundleRegistError } = useSelector(MonthScheduleState);
  const BundleAttendEdit = () => {
    const result = dispatch(MonthScheduleReducers.bundleAttendEdit(false));
    result.payload && navigate("/BundleAttendEdit");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Span
            color="#FBD13D"
            onClickSpan={() => {}}
            style="display_block"
            text="デ&nbsp;ー&nbsp;タ&nbsp;の&nbsp;一&nbsp;括&nbsp;制&nbsp;御"
          />
        </div>
        <div className={styles.body}>
          <Button
            dataTestid=""
            onClick={() => {
              BundleAttendEdit();
            }}
            text="登録"
            type="button"
            disabled={false}
          />
          <Button
            dataTestid=""
            onClick={() => {
              dispatch(MonthScheduleReducers.BundleApplovalRecuest(true));
            }}
            text="承認申請"
            type="button"
            disabled={false}
          />
          <Button
            dataTestid=""
            onClick={() => {}}
            text="PDF出力"
            type="button"
            disabled={false}
          />
        </div>
      </div>
      {bundleRegistError.openToggle && (
        <ErrorModal
          errorText={bundleRegistError.message}
          closeBtnFun={() => {
            dispatch(MonthScheduleReducers.ErrorCrose());
          }}
        />
      )}
    </>
  );
}

export default DataOperation;
