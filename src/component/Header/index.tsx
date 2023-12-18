import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import style from "./style.module.css";
interface props {}

const Header: FC<props> = ({}) => {
  const headerRef = useRef<HTMLElement>(null)
  const mouseHoverHandler = (event: MouseEvent<HTMLElement>) => {
    var x = 0;
    var ev = event.currentTarget;
    var int = setInterval(() => {
      x += 10;
      ev.style.background = `radial-gradient(farthest-side, #313131${
        x > 10 ? x : "0" + x
      }, #ebf8e100)`;
    }, 10);
    setTimeout(() => {
      clearInterval(int);
    }, 255);
  };
  const mouseOutHandler = (event: MouseEvent<HTMLElement>) => {
    var x = 255;
    var ev = event.currentTarget;
    var int = setInterval(() => {
      x = x - 10 < 0 ? 0 : x - 10;
      ev.style.background = `radial-gradient(closest-side, #313131${
        x > 10 ? x : "0" + x
      }, #ebf8e100)`;
    }, 10);
    setTimeout(() => {
      clearInterval(int);
    }, 255);
  };
  const onScroll = () => {
    const ev = headerRef.current as HTMLElement
    const factor = Math.floor(Math.exp(window.scrollY*0.017)  )
    const hecfactor = (factor > 255? 255: factor ).toString(16) 
    ev.style.backgroundColor = "#242424" +( hecfactor.length >1 ? hecfactor : "0"+ hecfactor)  
    ev.style.boxShadow= `0 1px 2px #202020${( hecfactor.length >1 ? hecfactor : "0"+ hecfactor)  }`
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header ref={headerRef} className={style.header}>
      <ul>
        <li onMouseEnter={mouseHoverHandler} onMouseLeave={mouseOutHandler}>
          <a href="">Home</a>
        </li>
        <li onMouseEnter={mouseHoverHandler} onMouseLeave={mouseOutHandler}>
          <a href="">Home</a>
        </li>
        <li onMouseEnter={mouseHoverHandler} onMouseLeave={mouseOutHandler}>
          <a href="">Home</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
