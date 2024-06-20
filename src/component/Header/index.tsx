import { FC } from "react";
import style from "./style.module.css";
interface props {
    routes: string[]
    index: number,
    setIndex: Function
}
const Header: FC<props> = ({routes, index, setIndex}) => {

  let dir = 0;
  if (dir > index) {
    dir = -1;
  } else if (dir < index) {
    dir = 1;
  }
  return (
    <div className={style.container}>
      <p className={style.subTitle}>Frontend Developer</p>
      <ul className={style.nav}>
        {routes.map((item, i) => {
          let dir = index - i;
          return (
            <div>
              <span style={{ left: `${dir * 10}em` }}></span>
              <a onClick={() => setIndex(i)} href={`#${item}`}>
                <li>{item}</li>
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
