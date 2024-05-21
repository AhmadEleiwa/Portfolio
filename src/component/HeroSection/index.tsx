import { FC, useEffect, useRef } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface props {
  onClick?: () => void;
}
const HeroSection: FC<props> = ({ onClick }) => {
  const section = useRef<HTMLDivElement>(null);
  let factorY = 0;
  const onScroll = () => {
    const sec = section.current as HTMLDivElement;

    factorY = (-window.scrollY / window.screen.height) * 100;
    sec.style.backgroundPositionY = 80 + factorY + "%";
    const blurFactor = Math.floor(Math.exp(window.scrollY * 0.017));
    sec.style.filter = `blur(${blurFactor <= 1 ? 0 : blurFactor * 0.02}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={style.container}>
      <div ref={section} className={style.heroSection}>
        <div className={style.titleContainer}>
          <h1>Ahmad Ilawa </h1>
          <h2>Web Developer</h2>
          <FontAwesomeIcon
            className={style.icon}
            onClick={onClick}
            icon={faCaretDown}
            size={"2x"}
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
