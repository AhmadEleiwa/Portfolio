import { FC } from "react";
import style from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
interface props {}
const PeronsalCard: FC<props> = () => {
  return (
    <div className={style.peronsalCard} >
      <div className={style.profileImage}>
        <img src={'profile_image.jpg'} alt="" />
        <div
        className={style.blur}
          style={{
            backgroundImage: `url("profile_image.jpg")`,
            filter: "blur(20px)",
            position: "absolute",
            opacity: "0.5",
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundPositionY: "center",
          }}></div>
      </div>
      <div className={style.title}>
        <h3> Ahmad Eleiwa</h3>
      </div>
      <div>ahmadilawa@gmail.com</div>
      <div>+9720592679982</div>
      <div className={style.bio}>
        {" "}
        <textarea disabled>
          Frontend Dev | CSE Student @ Arab American University
        </textarea>{" "}
      </div>

      <div className={style.media}>
        <a href="https://github.com/AhmadEleiwa" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://www.linkedin.com/in/ahmadilawa/" target="_blank">
          <FontAwesomeIcon
            className={style.icon}
            icon={faLinkedin}
            cursor={"pointer"}
          />
        </a>
      </div>
    </div>
  );
};

export default PeronsalCard;
