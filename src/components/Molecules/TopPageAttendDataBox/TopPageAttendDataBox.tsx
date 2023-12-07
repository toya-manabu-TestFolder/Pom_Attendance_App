import Span from "../../atoms/Span/Span";
import styles from "./TopPageAttendDataBox.module.scss";

type Props = {
  title: string;
  registApprovalState: string;
  BackGroundColor: string;
};

const TopPageAttendDataBox = ({
  title,
  registApprovalState,
  BackGroundColor,
}: Props) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.title}>
        <Span
          color="#FBD13D"
          onClickSpan={() => {}}
          style="display_block"
          text={title}
        />
      </div>
      <div
        className={styles.body}
        style={{
          backgroundColor: BackGroundColor,
        }}
      >
        <Span
          color={"#F9F4FC"}
          onClickSpan={() => {}}
          style="display_block"
          text={registApprovalState}
        />
      </div>
    </article>
  );
};

export default TopPageAttendDataBox;
