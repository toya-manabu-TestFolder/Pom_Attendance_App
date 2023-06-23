import { useNavigate } from "react-router-dom";
import Span from "../../../atoms/Span/Span";
import Button from "../../../atoms/button/Button";
import styles from "./MenuModal.module.css";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Stats, homeSliceReducers } from "../../../../features/homeSlice";
import { gsap } from "gsap/gsap-core";
import { useEffect } from "react";
import {
  AuthReducers,
  AuthState,
  LogOut,
} from "../../../../features/authSlice";
import RecuestModal2 from "../RecuestModal2/RecuestModal2";
import ErrorModal from "../ErrorModal/ErrorModal";

type Props = {
  setIsMenu: (event: boolean) => void;
};

function MenuModal({ setIsMenu }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toDay } = useSelector(Stats);
  const { LogOutObj, ErrorObj } = useSelector(AuthState);
  const URL = location.pathname;

  useEffect(() => {
    dispatch(homeSliceReducers.setToDay(""));
  }, []);

  function canMovePage(PATH: string) {
    if (URL === PATH) return;
    navigate(PATH, { state: { toDay: toDay } });
    dispatch(homeSliceReducers.toggleLoading(false));
  }

  function CloseMenu() {
    gsap
      .timeline()
      .to("#MENU", {
        duration: 0.5,
        xPercent: 110,
      })
      .to(
        "#MENU_WRAPPER",
        {
          opacity: 0,
          onComplete: () => {
            setIsMenu(false);
          },
        },
        "-=0.6"
      );
  }

  return (
    <div id="MENU_WRAPPER" className={styles.module_wrapp}>
      <div
        className={styles.menu_overlay}
        onClick={() => {
          CloseMenu();
        }}
      ></div>
      <div id="MENU" className={styles.menu_wrapp}>
        <div className={styles.close_button_wrapper}>
          <Span
            color="#fbd13d"
            onClickSpan={() => {
              CloseMenu();
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
                canMovePage("/Home");
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
              onClick={async () => {
                canMovePage("/DaySchedule");
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
                canMovePage("/MonthSchedule");
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
                navigate("/OtherEditPage");
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
            <Button
              dataTestid=""
              onClick={() => {
                dispatch(AuthReducers.toggleLogoutModal(true));
              }}
              text="ログアウト"
              type="button"
              disabled={false}
            />
          </div>
        </div>
      </div>
      <RecuestModal2
        toggleModal={LogOutObj.isModal}
        okBtnFunProps={async () => {
          const result = await dispatch(LogOut());
          if (result.payload === 200) {
            Cookie.remove("LoginUser");
            navigate("/");
            window.location.reload();
          }
        }}
        noBtnFunProps={() => {
          dispatch(AuthReducers.toggleLogoutModal(false));
        }}
        text=""
        message={
          <div
            style={{
              width: "100%",
              height: "100%",
              fontSize: "1.5em",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Span
              color="#F9F4FC"
              onClickSpan={() => {}}
              style="display_block"
              text="ログアウトしますか？"
            />
          </div>
        }
      />
      <ErrorModal
        toggleModal={ErrorObj.isError}
        errorText={ErrorObj.message}
        closeBtnFun={() => {
          dispatch(AuthReducers.closeErrorModal());
        }}
      />
    </div>
  );
}

export default MenuModal;
