import { FC, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
interface props {
  description?: string;
  icon:any;
  title:string;
}
const ExpandField: FC<props> = ({ description,icon,title }) => {
    const [dropDownOpenm, setDropDownOpen] = useState(false)
  const descriptionRef = useRef<HTMLDivElement>(null);
  const dropDownHandler = () => {
    setDropDownOpen(prev => !prev)
    const el = descriptionRef.current as HTMLDivElement;
    if (el.style.height == "0px") {
      el.style.height = "100px";
    } else {
      el.style.height = "0px";
    }
  };
  return (
    <div className={style.expandField}>
      <div className={style.heading}>
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          {" "}
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </div>
        {description &&<FontAwesomeIcon
          className={style.icon}
          icon={dropDownOpenm ?  faCaretUp : faCaretDown}
          cursor={"pointer"}
          onClick={dropDownHandler}
        />}
      </div>
      <div
        style={{ height: 0 }}
        ref={descriptionRef}
        className={style.description}
      >
        {description}
      </div>
    </div>
  );
};

export default ExpandField;
