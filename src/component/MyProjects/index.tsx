import { FC } from "react";
import Card from "./Card";
import style from "./style.module.css";

const MyProjects: FC = () => {
  return (
    <div className={style.myProjects}>
      <h1>My Projects</h1>
      <div className={style.list}>
        <Card
          title="POS-System"
          description="Point Of Sale System is Webstie that manage a supermarket carts"
          langauge="Typescript"
        />
        <Card
          title="TodoListReact"
          description="Todo List app using React.js and typescript"
          langauge="Typescript"
        />
        <Card
          title="Podcast"
          description="Podcast hosting website built using react & firebase (apple podcast API)"
          langauge="Typescript"
        />
        <Card
          title="BookShop"
          description="A bookshop website built using ASP. CORE framework."
          langauge="C#"
        />
        <Card
          title="CSVReader"
          description="CSVReader is node app that read from CSV file and display it as JSON object"
          langauge="Javascript"
        />
        <Card title="JEnjine" description="Java game engine" langauge="Java" />
      </div>
    </div>
  );
};

export default MyProjects;
