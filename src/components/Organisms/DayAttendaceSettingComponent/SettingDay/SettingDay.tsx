import Span from "../../../atoms/Span/Span";
import styles from "./SettingDay.module.css";

type Props = {
  year: string;
  month: string;
  day: string;
  dayOfWeek: string;
};

function SettingDay({ year, month, day, dayOfWeek }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="対&nbsp;象&nbsp;日"
        />
      </div>
      <div className={styles.body}>
        <Span
          color="#F9F4FC"
          onClickSpan={() => {}}
          style="display_block"
          text={
            year + "年 " + month + "月 " + day + "日 " + "(" + dayOfWeek + ")"
          }
        />
      </div>
    </div>
  );
}

export default SettingDay;
