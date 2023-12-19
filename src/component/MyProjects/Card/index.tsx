import { FC } from "react";
import style from "./style.module.css";
interface props {
  title: string;
  description: string;
  langauge: "Typescript" | "Javascript" | "C#" | "Java";
}
const LANGUAGE_THEME_COLOR = {
  Typescript: "#3887BE",
  Javascript: "#EEC759",
  "C#": "#65B741",
  Java: "#FF9800",
};
const Card: FC<props> = ({ title, description, langauge }) => {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <div className={style.description}>
      {description}
      </div>
      <div className={style.language}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius:'50%',
            backgroundColor: LANGUAGE_THEME_COLOR[langauge],
          }}
        ></div>
        <span> {langauge}</span>
      </div>
    </div>
  );
};

export default Card;
