import Span from "../../../atoms/Span/Span";
import styles from "./SettingState.module.css";

type Props = {
  registState: string;
};

function SettingState({ registState }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text="登&nbsp;録&nbsp;状&nbsp;態"
        />
      </div>
      <div className={styles.body}>
        <Span
          color="#F9F4FC"
          onClickSpan={() => {}}
          style="display_block"
          text={registState}
        />
      </div>
    </div>
  );
}

export default SettingState;
