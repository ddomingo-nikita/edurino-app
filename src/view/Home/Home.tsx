import React from "react";
import "./home.css";
import EdurinoLogo from "../../assets/edurino_logo.png";

import SecondChar from "../../assets/characters/second_char.svg";
import Fox from "../../assets/characters/fox.svg";
import { useLocation } from "wouter";
import { Circle } from "../../components/circleForBackground/Circle.tsx";
import { useSpring, animated } from "@react-spring/web";

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();

  const props = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
    config: {
      tension: 700,
      mass: 5,
    },
    loop: true,
  });

  return (
    <div className={"container"}>
      <img alt={"edurino"} className={"logo"} src={EdurinoLogo} />
      <h1 className={"title"}>Study Time - Best Time</h1>
      <Circle width={442} height={442} top={0} left={0} transform={"translate(-50%,-50%)"} />
      <div className={"content-container"}>
        <img alt={"second"} src={SecondChar} className={"char-left"} />
        <div className={"box"}>
          <h1 className={"text"}>Help us make it better!</h1>
          <animated.button onClick={() => setLocation("/best-testers")} style={props}>
            Let's go!
          </animated.button>
        </div>
        <img alt={"fox"} src={Fox} className={"char-right"} />
      </div>
      <Circle width={186} height={186} top={0} right={0} transform={"translate(50%,-50%)"} />
      <Circle width={53} height={53} top={310} left={242} transform={"none"} />
      <Circle width={41} height={41} top={439} left={769} transform={"none"} />
      <Circle width={30} height={30} top={1014} left={642} transform={"none"} />
      <Circle width={24} height={24} top={500} right={500} transform={"none"} />
    </div>
  );
};
