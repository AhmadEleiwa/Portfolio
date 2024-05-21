import { FC } from "react";
import PeronsalCard from "./PeronsalCard";
import style from "./style.module.css";
import SkillCards from "./SkillCards";

const Profile: FC = () => {
  return (
    <div>
      <h1 style={{ width: "75%", margin: "0em auto" }}>My Profile</h1>
      <div className={style.container}>
        <PeronsalCard />
        <SkillCards />
      </div>
    </div>
  );
};

export default Profile;
