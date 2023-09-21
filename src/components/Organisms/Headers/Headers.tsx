import { useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import styles from "./Headers.module.css";
import MenuModal from "../Modals/MenuModal/MenuModal";
import Cookies from "js-cookie";

// type Props = {};

function Headers() {
  const [isMenu, setIsMenu] = useState(false);
  const [loginUserName, setLoginUserName] = useState<string | undefined>("");

  useEffect(() => {
    setLoginUserName(Cookies.get("userName"));
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.Home_link_wrapp} data-testid="Home-link"></div>
        <div className={styles.login_user_wrapp} data-testid="login-user">
          <div className={styles.text_wrapp}>
            <span className={styles.text}>
              こんにちは！{loginUserName}さん！
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
