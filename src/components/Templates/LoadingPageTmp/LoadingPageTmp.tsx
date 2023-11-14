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
  let charaArray = [
    "pom",
    "mint",
    "muffin",
    "powder",
    "scone",
    "tart",
    "bagel",
  ];

  const onpAnimation = {
    duration: 3,
    rotate: 90,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    overwrite: true,
    paused: toggleLoading,
  };

  const textAnimation = {
    duration: 1,
    delay: 0.2,
    stagger: 0.1,
    repeat: -1,
    motionPath: [{ y: -80 }, { y: 0 }],
    overwrite: true,
    paused: toggleLoading,
  };

  const charaAnimation = {
    duration: 10,
    repeat: -1,
    ease: "linear.inOut",
    yoyo: true,
    rotate: 5,
    motionPath: [{ x: 30 }, { x: -30 }],
    overwrite: true,
    paused: toggleLoading,
  };

  useEffect(() => {
    gsap.set("#Loading_modal", { display: "grid", opacity: 1 });

    if (toggleLoading) {
      gsap.to("#Loading_modal", {
        duration: 0.5,
        delay: 1.2,
        opacity: 0,
      });

      setTimeout(() => {
        gsap.set("#Loading_modal", { display: "none" });
        gsap.to(".onp", onpAnimation);
        gsap.to(`#Loding_text`, textAnimation);
        gsap.to("#pom", charaAnimation);
        gsap.to("#mint", charaAnimation);
        gsap.to("#muffin", charaAnimation);
        gsap.to("#powder", charaAnimation);
        gsap.to("#scone", charaAnimation);
        gsap.to("#tart", charaAnimation);
        gsap.to("#bagel", charaAnimation);
      }, 1700);
    } else {
      gsap.set(".onp", { rotate: -90 });
      for (let chara of charaArray) {
        gsap.set(`#${chara}`, { rotate: -5 });
      }

      gsap.to(".onp", onpAnimation);
      gsap.to(`#Loding_text`, textAnimation);
      gsap.to("#pom", charaAnimation);
      gsap.to("#mint", charaAnimation);
      gsap.to("#muffin", charaAnimation);
      gsap.to("#powder", charaAnimation);
      gsap.to("#scone", charaAnimation);
      gsap.to("#tart", charaAnimation);
      gsap.to("#bagel", charaAnimation);
    }
  }, [toggleLoading]);

  const characterArray = ["読", "み", "込", "み", "中", ".", ".", "."];
  return (
    <div id="Loading_modal" className={styles.Loading_modal_wrapper}>
      {characterArray.map((chara, index) => (
        <div
          id={`Loding_text`}
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
