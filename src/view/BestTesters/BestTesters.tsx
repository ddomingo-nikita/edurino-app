import React from "react";
import Fox from "../../assets/characters/fox.svg";
import "./best_testers.css";
import { AnimatedCircles } from "../../components/animatedCircles/AnimatedCircles.jsx";
import { useLocation } from "wouter";

const childrenArray = [
  { name: "Martin", img: "src/assets/testers/Martin.jpg" },
  { name: "Erik", img: "src/assets/testers/Erik.jpg" },
  { name: "Claudia", img: "src/assets/testers/Claudia.jpg" },
  { name: "Janett", img: "src/assets/testers/Janett.jpg" },
];

export const BestTesters = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();

  return (
    <div className={"container"}>
      <h1 className={"title"}>Our best testers</h1>
      <div className={"testers-container"}>
        {childrenArray.map((child, index) => (
          <div key={index} className={"tester"}>
            <img alt={child.name} src={`${child.img}`} className={"tester-img"} />
            <p>{child.name}</p>
          </div>
        ))}
      </div>
      <div className={"button-container"}>
        <h1
          className={"text"}
          style={{ fontWeight: "normal", textAlign: "left", marginLeft: "10%", maxWidth: "70%", fontSize: 74 }}
        >
          As you can see, they are children too, therefore{" "}
        </h1>
        <img alt={"fox"} className={"char-right"} src={Fox} />
        <button
          className={"large-button"}
          style={{ width: 993, alignSelf: "center" }}
          onClick={() => setLocation("/demo-game")}
        >
          Become our tester!
        </button>
      </div>
      <AnimatedCircles pageNum={0} />
    </div>
  );
};
