import { useEffect } from "react";
import Span from "../../../atoms/Span/Span";
import styles from "./LoadingModal.module.scss";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

function LoadingModal() {
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
    setTimeout(() => {
      gsap.to("#Loading_modal", { opacity: 0 });
    }, 1500);
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
  }, []);
  const characterArray = ["読", "み", "込", "み", "中", ".", ".", "."];
  return (
    <div
      id="Loading_modal"
      className={styles.Loading_modal_wrapper}
      key={"Loading_modal_wrapper"}
    >
      {characterArray.map((chara, index) => (
        <div
          id={`Loding_text${index + 1}`}
          className={`${styles[`Loding_text${index + 1}`]}`}
          key={`${chara + index}`}
        >
          <Span
            style="display_block"
            color="#7E262B"
            text={chara}
            onClickSpan={() => {}}
          />
        </div>
      ))}

      {charaArray.map((chara) => (
        <div
          id={chara}
          className={`${styles[chara]} ${styles.Loding_img} `}
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

export default LoadingModal;
