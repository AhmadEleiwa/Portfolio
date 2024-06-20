import { useEffect, useRef, useState } from "react";
import "./App.css";
import HeroSection from "./component/HeroSection";
import MyProjects from "./component/MyProjects";
import Info from "./component/Profile";
import Header from "./component/Header";

function App() {
  const [index, setIndex] = useState<number>(0);
  const dataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIndex(0);
        }
      });
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIndex(1);
        }
      });
    });
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIndex(2);
        }
      });
    });
    window.addEventListener("load", () => {
      observer1.observe(document.getElementById("About")!);
      observer2.observe(document.getElementById("Skills")!);
      observer3.observe(document.getElementById("Projects")!);
    });

    window.matchMedia("(prefers-color-scheme: light)");
    return () => {
      window.removeEventListener("load", () => {
        observer1.observe(document.getElementById("Projects")!);
        observer2.observe(document.getElementById("Skills")!);
        observer3.observe(document.getElementById("About")!);
      });
    };
  }, []);

  return (
    <div className="container">
      <Header
        index={index}
        setIndex={setIndex}
        routes={["About", "Skills", "Projects"]}
      />
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
