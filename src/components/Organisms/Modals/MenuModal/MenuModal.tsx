import { useNavigate } from "react-router-dom";
import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./MenuModal.module.css";
import Cookie from "js-cookie";
import { LogOut } from "../../../../features/authSlice";
import { useDispatch } from "react-redux";

type Props = {
  setIsMenu: (event: boolean) => void;
};

function MenuModal({ setIsMenu }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.module_wrapp}>
      <div
        className={styles.menu_overlay}
        onClick={() => {
          setIsMenu(false);
        }}
      ></div>
      <div className={styles.menu_wrapp}>
        <div className={styles.close_button_wrapper}>
          <Span
            color="#fbd13d"
            onClickSpan={() => {
              setIsMenu(false);
            }}
            style="menu_close"
            text="×"
          />
        </div>
        <div className={styles.menu_button_wrapper}>
          <div className={styles.menu_pointer}>
            <img
              className={styles.menu_pointer_img}
              src="/navigation/navPointer.png"
              alt=""
            />
          </div>
          <div className={styles.menu_button}>
            <Button
              dataTestid=""
              onClick={() => {
                navigate("/Home");
              }}
              text="TOP"
              type="button"
              disabled={false}
            />
          </div>
        </div>
        <div className={styles.menu_button_wrapper}>
          <div className={styles.menu_pointer}>
            <img
              className={styles.menu_pointer_img}
              src="/navigation/navPointer.png"
              alt=""
            />
          </div>
          <div className={styles.menu_button}>
            <Button
              dataTestid=""
              onClick={() => {
                navigate("/DaySchedule");
              }}
              text="日次勤怠"
              type="button"
              disabled={false}
            />
          </div>
        </div>
        <div className={styles.menu_button_wrapper}>
          <div className={styles.menu_pointer}>
            <img
              className={styles.menu_pointer_img}
              src="/navigation/navPointer.png"
              alt=""
            />
          </div>
          <div className={styles.menu_button}>
            <Button
              dataTestid=""
              onClick={() => {
                navigate("/MonthSchedule");
              }}
              text="月次勤怠"
              type="button"
              disabled={false}
            />
          </div>
        </div>
        <div className={styles.menu_button_wrapper}>
          <div className={styles.menu_pointer}>
            <img
              className={styles.menu_pointer_img}
              src="/navigation/navPointer.png"
              alt=""
            />
          </div>
          <div className={styles.menu_button}>
            <Button
              dataTestid=""
              onClick={() => {
                setIsMenu(true);
              }}
              text="各種設定"
              type="button"
              disabled={false}
            />
          </div>
        </div>
        <div className={styles.menu_button_wrapper}>
          <div className={styles.menu_pointer}>
            <img
              className={styles.menu_pointer_img}
              src="/navigation/navPointer.png"
              alt=""
            />
          </div>
          <div className={styles.menu_button}>
            <a href="/" style={{ textDecoration: "none" }}>
              <Button
                dataTestid=""
                onClick={() => {
                  dispatch(LogOut());
                  Cookie.remove("LoginUser");
                }}
                text="ログアウト"
                type="button"
                disabled={false}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
