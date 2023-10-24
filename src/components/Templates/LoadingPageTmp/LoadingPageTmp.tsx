import { useEffect } from "react";
import styles from "./LoadingPageTmp.module.scss";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Span from "../../atoms/Span/Span";
import { Stats } from "../../../features/homeSlice";
import { useSelector } from "react-redux";

gsap.registerPlugin(MotionPathPlugin);

function LoadingPageTmp() {
  let { toggleLoading } = useSelector(Stats);
  const charaArray = [
    "pom",
    "mint",
    "muffin",
    "powder",
    "scone",
    "tart",
    "bagel",
  ];
  useEffect(() => {
    if (toggleLoading) {
      gsap.to("#Loading_modal", {
        duration: 0.5,
        delay: 1.2,
        opacity: 0,
      });
      setTimeout(() => {
        gsap.set("#Loading_modal", { display: "none" });
      }, 1700);
    } else {
      gsap.set("#Loading_modal", { display: "grid", opacity: 1 });
      for (const chara of charaArray) {
        gsap.set(`#${chara}`, { rotate: -5 });
        gsap.to(`#${chara}`, {
          duration: 10,
          repeat: -1,
          ease: "linear.inOut",
          yoyo: true,
          rotate: 5,
          motionPath: [{ x: 30 }, { x: -30 }],
        });
      }

      gsap.set(".onp", { rotate: -90 });
      gsap.to(".onp", {
        duration: 3,
        rotate: 90,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
      for (let i = 1; i <= 8; i++) {
        const text = gsap.timeline({
          duration: 1,
          delay: 0.2 * i - 1,
          repeat: -1,
          repeatDelay: 0.3,
        });
        text.to(`#Loding_text${i}`, { y: -80 });
        text.to(`#Loding_text${i}`, { y: 0 });
      }
    }
  }, [toggleLoading]);
  const characterArray = ["読", "み", "込", "み", "中", ".", ".", "."];
  return (
    <div id="Loading_modal" className={styles.Loading_modal_wrapper}>
      {characterArray.map((chara, index) => (
        <div
          id={`Loding_text${index + 1}`}
          className={`${styles[`Loding_text${index + 1}`]}`}
          key={`${chara + index}`}
        >
          <Span
            style="display_block"
            color="#F54901"
            text={chara}
            onClickSpan={() => {}}
          />
        </div>
      ))}

      {charaArray.map((chara, index) => (
        <div
          id={chara}
          className={`${styles[chara]} ${styles.Loding_img} `}
          key={index}
        ></div>
      ))}

      {(function () {
        const items = [];
        for (let i = 1; i <= 6; i++) {
          items.push(
            <li
              className={`${styles[`onp${i}`]} ${styles.Loding_img} onp`}
              key={"item" + i}
            ></li>
          );
        }
        return <ul>{items}</ul>;
      })()}
    </div>
  );
}

export default LoadingPageTmp;
