import { FC, useEffect, useRef } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface props {
  onClick?: () => void;
}
const HeroSection: FC<props> = ({ onClick }) => {
  const section = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLHeadingElement>(null);

  let factorY = 0;
  const onScroll = () => {
    const sec = section.current as HTMLDivElement;

    factorY = (-window.scrollY / window.screen.height) * 100;
    sec.style.backgroundPositionY = 80 + factorY + "%";
    const blurFactor = Math.floor(Math.exp(window.scrollY * 0.017));
    sec.style.filter = `blur(${blurFactor <= 1 ? 0 : blurFactor * 0.02}px)`;
  };

  let [i, j] = [0, 0];
  let pos = ["WEB DEVELOPER", "FRONTEND DEV", "BACKEND DEV"];
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    let id: any;
    window.addEventListener("load", () => {
      section.current?.classList.add(style.animate);
      setTimeout(() => {
        id = setInterval(() => {
          if (j <= pos[i].length) {
            if (head.current) {
              head.current.style.height = 1 + "lh";
              head.current.style.width = j + 1 + "ch";
              head.current.innerText = pos[i].slice(0, j);
            }
            j++;
          } else {
            j = 0;
            if (head.current) head.current.style.width = 1 + "ch";
            // clearInterval(id);
            i++;
          }
          if (i >= pos.length) i = 0;
        }, 300);
      }, 500);
    });

    return () => {
      removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);
  return (
    <div className={style.container} id="About">
      <div ref={section} className={style.heroSection}>
        <div className={style.titleContainer}>
          <h1>AHMAD ILAWA</h1>
          <h2 ref={head}></h2>
          <p>Frontend Dev | CSE Student @ Arab American University</p>
          <FontAwesomeIcon
            className={style.icon}
            onClick={onClick}
            icon={faCaretDown}
            size={"2x"}
            cursor={"pointer"}
          />
        </div>
      </div>
      <div id="About"></div>
    </div>
  );
};
export default HeroSection;
