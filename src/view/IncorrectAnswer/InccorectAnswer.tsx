import { useLocation, useRoute } from "wouter";
import Fox from "../../assets/characters/fox.svg";
import { AnimatedCircles } from "../../components/animatedCircles/AnimatedCircles.jsx";
import "./incorrect-answer.css";
import { Circle } from "../../components/circleForBackground/Circle.tsx";
import React from "react";
const incorrectDescriptions = [
  {
    title: "Correct, but...",
    description: "this is the right answer only for ",
    planet: "Proxima Centauri d",
  },
  {
    title: "Yes, but...",
    description: "this is the right answer only for ",
    planet: "Ross 128 b",
  },
];

export const InccorectAnswer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [match, params] = useRoute("/demo-game/incorrect/:number");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();

  return (
    <div className={"incorrect-container"}>
      <h1 className={"title"}>{incorrectDescriptions[parseInt(params["number"])].title}</h1>
      <div
        className={"button-container"}
        style={{ justifyContent: "space-evenly", height: "70%", alignItems: "start" }}
      >
        <h1
          className={"text"}
          style={{ fontWeight: "normal", textAlign: "right", marginLeft: "5%", maxWidth: "60%", fontSize: 74 }}
        >
          {incorrectDescriptions[parseInt(params["number"])].description}
          <span style={{ fontWeight: "bold" }}>{incorrectDescriptions[parseInt(params["number"])].planet}</span>
        </h1>

        <button
          className={"large-button"}
          style={{ width: 993, alignSelf: "center" }}
          onClick={() => setLocation("/demo-game")}
        >
          Let's try another one!
        </button>
      </div>
      <img alt={"fox"} className={"char-right"} src={Fox} />
      <AnimatedCircles pageNum={2} />
      <Circle width={500} height={500} bottom={0} left={0} transform={"translate(-50%,50%)"} />
    </div>
  );
};
