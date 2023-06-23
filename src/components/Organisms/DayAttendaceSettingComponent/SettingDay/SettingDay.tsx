import Span from "../../../atoms/Span/Span";
import styles from "./SettingDay.module.css";

type Props = {
  toDay: string;
};

function SettingDay({ toDay }: Props) {
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  let setDate = "";
  setDate = toDay;
  if (toDay !== "一括設定中") {
    const newDay = new Date(toDay);
    const year = newDay.getFullYear();
    const month = newDay.getMonth() + 1;
    const day = newDay.getDate();
    const dayOfWeek = week[newDay.getDay()];
    setDate = `${year}年 ${month}月 ${day}日 (${dayOfWeek})`;
  }
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
          color={toDay === "一括設定中" ? "#49F01F" : "#F9F4FC"}
          onClickSpan={() => {}}
          style="display_block"
          text={setDate}
        />
      </div>
    </div>
  );
}

export default SettingDay;
