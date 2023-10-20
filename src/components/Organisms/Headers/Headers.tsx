import { useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import styles from "./Headers.module.css";
import MenuModal from "../Modals/MenuModal/MenuModal";
import Cookie from "js-cookie";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Headers() {
  const [isMenu, setIsMenu] = useState(false);
  const [toggleHeader, setToggleHeader] = useState(true);
  const [toggleHeaderBtn, setToggleHeaderBtn] = useState(true);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1200px)", () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#toggle_top", {
        duration: 1,
        right: 0,
        scrollTrigger: {
          trigger: "#nav",
          start: "bottom top", //triggerのbottomがブラウザのtopにきたらスタート
          toggleActions: "play none none reverse",
          onEnter: () => {
            setToggleHeader(false);
            runToggleHeaderBtn(false);
          },
          onEnterBack: () => {
            setToggleHeader(true);
            gsap.to("#toggle_top", {
              duration: 1,
              y: 0,
            });
          },
        },
      });
    });
  }, []);

  // 関数名変更予定
  function runToggleHeaderBtn(isToggleHeaderBtn: boolean) {
    if (isToggleHeaderBtn) {
      setToggleHeader(true);
      setToggleHeaderBtn(false);
      gsap.to("#toggle_top", {
        duration: 1,
        y: 120,
      });
    } else {
      setToggleHeader(false);
      setToggleHeaderBtn(true);
      gsap.to("#toggle_top", {
        duration: 1,
        y: 0,
      });
    }
  }
  return (
    <>
      <nav
        id="nav"
        className={`${styles.nav} ${
          toggleHeader ? styles.open_nav : styles.close_nav
        }`}
      >
        <div className={styles.Home_link_wrapp} data-testid="Home-link"></div>
        <div className={styles.login_user_wrapp} data-testid="login-user">
          <div className={styles.login_pom_img}></div>
          <div className={styles.login_pomfriend_img}></div>
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
      <div id="toggle_top" className={styles.toggle_top_wrapper}>
        <img
          src="/navigation/toggleTop.png"
          className={styles.toggle_top_img}
          alt="TOPメニューを表示する"
        />
        <div className={styles.toggle_top_button}>
          <Button
            dataTestid=""
            onClick={() => {
              runToggleHeaderBtn(toggleHeaderBtn);
            }}
            text={toggleHeaderBtn ? "TOPを表示" : "TOPを非表示"}
            type="button"
            disabled={false}
          />
        </div>
      </div>

      {isMenu && <MenuModal setIsMenu={setIsMenu} />}
    </>
  );
}

export default Headers;
