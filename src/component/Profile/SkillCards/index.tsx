import { FC } from "react";
import style from "./style.module.css";
import ExpandField from "./ExpandField";
import {
  faGitAlt,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faDatabase,
  faMobileAndroid,
} from "@fortawesome/free-solid-svg-icons";

const SkillCards: FC = () => {
  return (
    <div className={style.container}>
      <h2>Skills</h2>
      <div className={style.list}>
        <ExpandField
          title="Python"
          icon={faPython}
          description="Python is my favorite language and the first one I learned. I use it for backend development, data analysis, and machine learning."
        />
        <ExpandField title="Version Control System" icon={faGitAlt} />
        <ExpandField title="Frontend/React" icon={faReact} />
        <ExpandField title="Database" icon={faDatabase} />
        <ExpandField title="Mobile Dev/Flutter" icon={faMobileAndroid} />
        <ExpandField title="ML" icon={faBrain} />
      </div>
    </div>
  );
};

export default SkillCards;
