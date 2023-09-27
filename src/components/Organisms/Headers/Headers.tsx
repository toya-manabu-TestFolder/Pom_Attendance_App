import { useState } from "react";
import Button from "../../atoms/button/Button";
import styles from "./Headers.module.css";
import MenuModal from "../Modals/MenuModal/MenuModal";
import Cookie from "js-cookie";

function Headers() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.Home_link_wrapp} data-testid="Home-link"></div>
        <div className={styles.login_user_wrapp} data-testid="login-user">
          <div className={styles.text_wrapp}>
            <span className={styles.text}>
              こんにちは！{Cookie.get("LoginUser")}さん！
            </span>
          </div>
        </div>
        <div className={styles.menu_button_wrapp} data-testid="menu-button">
          <div className={styles.menu_button}>
            <Button
              dataTestid=""
              onClick={() => {
                setIsMenu(true);
              }}
              text="MENU"
              type="button"
              disabled={false}
            />
          </div>
        </div>
      </nav>
      {isMenu && <MenuModal setIsMenu={setIsMenu} />}
    </>
  );
}

export default Headers;
