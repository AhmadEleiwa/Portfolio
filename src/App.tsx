import { useEffect, useRef } from "react";
import "./App.css";
import HeroSection from "./component/HeroSection";
import MyProjects from "./component/MyProjects";
import Info from "./component/Profile";

function App() {
  const dataRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: light)");
  }, []);
  return (
    <div className="container">
      <HeroSection
        onClick={() => {
          console.log(dataRef.current);
          scrollTo(0, dataRef.current?.offsetTop as number);
        }}
      />
      <div ref={dataRef}></div>
      <Info />
      <MyProjects />
      <div className={"stocks"}>
        <div style={{ position: "absolute", top: "100vh" }}>
          <img src="skills.png" alt="" />{" "}
        </div>
        <div style={{ position: "absolute", top: "1550px", right: "2em" }}>
          <img src="projects.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
