import { FC } from "react";
import PeronsalCard from "./PeronsalCard";
import style from "./style.module.css";
import SkillCards from "./SkillCards";

const Profile: FC = () => {
  return (
    <div className={style.profile}>
      <div id="Skills"></div>
      <h1 className={style.title} >My Profile</h1>
      <div className={style.container}  >
        <PeronsalCard />
        <SkillCards />
      </div>
    </div>
  );
};

export default Profile;
