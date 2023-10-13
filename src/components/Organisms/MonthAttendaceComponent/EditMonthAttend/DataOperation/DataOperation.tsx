import Span from "../../../../atoms/Span/Span";
import Button from "../../../../atoms/button/Button";
import styles from "./DataOperation.module.scss";

function DataOperation() {
  return (
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
          onClick={() => {}}
          text="登録"
          type="button"
          disabled={false}
        />
        <Button
          dataTestid=""
          onClick={() => {}}
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
  );
}

export default DataOperation;
