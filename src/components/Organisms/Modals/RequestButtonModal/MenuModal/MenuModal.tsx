import Button from "../../../../atoms/button/Button";
import styles from "./MenuModal.module.css";

type Props = {
  setIsMenu: (event: boolean) => void;
};

function MenuModal({ setIsMenu }: Props) {
  return (
    <div className={styles.module_wrapp}>
      <div
        className={styles.menu_overlay}
        onClick={() => {
          setIsMenu(false);
        }}
      ></div>
      <div className={styles.menu_wrapp}>
        <div className={styles.menu_button}>
          <img
            className={styles.menu_pointer}
            src="/navigation/navPointer.png"
            alt=""
          />
          <Button
            dataTestid=""
            onClick={() => {
              setIsMenu(true);
            }}
            text="TOP"
            type="button"
          />
        </div>
        <div className={styles.menu_button}>
          <img
            className={styles.menu_pointer}
            src="/navigation/navPointer.png"
            alt=""
          />
          <Button
            dataTestid=""
            onClick={() => {
              setIsMenu(true);
            }}
            text="日次勤怠"
            type="button"
          />
        </div>
        <div className={styles.menu_button}>
          <img
            className={styles.menu_pointer}
            src="/navigation/navPointer.png"
            alt=""
          />
          <Button
            dataTestid=""
            onClick={() => {
              setIsMenu(true);
            }}
            text="月次勤怠"
            type="button"
          />
        </div>
        <div className={styles.menu_button}>
          <img
            className={styles.menu_pointer}
            src="/navigation/navPointer.png"
            alt=""
          />
          <Button
            dataTestid=""
            onClick={() => {
              setIsMenu(true);
            }}
            text="各種設定"
            type="button"
          />
        </div>
        <div className={styles.menu_button}>
          <img
            className={styles.menu_pointer}
            src="/navigation/navPointer.png"
            alt=""
          />
          <Button
            dataTestid=""
            onClick={() => {
              setIsMenu(true);
            }}
            text="ログアウト"
            type="button"
          />
        </div>
        <div className={styles.menu_button}>
          <img
            className={styles.menu_pointer}
            src="/navigation/navPointer.png"
            alt=""
          />
          <Button
            dataTestid=""
            onClick={() => {
              setIsMenu(false);
            }}
            text="とじる"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
