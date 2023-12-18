import { FC } from "react";
import PeronsalCard from "./PeronsalCard";
import style from "./style.module.css";
import SkillCards from "./SkillCards";
import dancing from "./dancing.gif";
interface props {}
const Profile: FC<props> = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>My Profile</h1>
      <div className={style.container}>
        <PeronsalCard />
        <SkillCards />
      </div>
    </>
  );
};

export default Profile;
