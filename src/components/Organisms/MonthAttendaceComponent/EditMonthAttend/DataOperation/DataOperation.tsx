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
import { useState } from "react";
import ExcelJS from "exceljs";

const DataOperation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bundleRegistError, MonthAttendList } =
    useSelector(MonthScheduleState);
  const [select, setSelect] = useState("");

  async function csvORexcelDownload(type: string) {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("sheet1");
    const worksheet = workbook.getWorksheet("sheet1");
    if (worksheet !== undefined) {
      const Columns = [];
      for (const obj in MonthAttendList[0]) {
        if (obj === "選択") continue;
        Columns.push({ header: obj, key: obj });
      }
      worksheet.columns = Columns;

      worksheet.addRows(MonthAttendList);
    }
    const uint8Array =
      type === "xlsx"
        ? await workbook.xlsx.writeBuffer()
        : await workbook.csv.writeBuffer();
    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sampleData." + type; //フォーマットによってファイル拡張子を変えている
    a.click();
    a.remove();
  }

  function runSelected(select: string) {
    if (select === "登録") {
      const result = dispatch(MonthScheduleReducers.bundleAttendEdit(false));
      result.payload && navigate("/BundleAttendEdit");
    }
    if (select === "承認") {
      dispatch(MonthScheduleReducers.BundleApplovalRecuest(true));
    }
    if (select === "csv" || select === "xlsx") {
      csvORexcelDownload(select);
    }
  }
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
          <select
            className={styles.select}
            onChange={(event) => setSelect(event.target.value)}
            defaultValue={"登録"}
          >
            <option className={styles.select_option} value="登録">
              一括 日次勤怠登録
            </option>
            <option className={styles.select_option} value="承認">
              一括 承認申請
            </option>
            <option className={styles.select_option} value="csv">
              CSV形式でダウンロード
            </option>
            <option className={styles.select_option} value="xlsx">
              Excel形式でダウンロード
            </option>
          </select>
          <div className={styles.run_Button}>
            <Button
              dataTestid=""
              onClick={() => {
                runSelected(select);
              }}
              text="実行"
              type="button"
              disabled={false}
            />
          </div>
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
};

export default DataOperation;
