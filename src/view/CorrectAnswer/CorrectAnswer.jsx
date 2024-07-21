import EdurinoLogo from "../../assets/edurino_logo.png";

import SecondChar from "../../assets/characters/second_char.svg";
import Fox from "../../assets/characters/fox.svg";
import React, { useEffect } from "react";
import QR from "../../assets/qr_code.svg";
import { useLocation } from "wouter";
import "./correct-answer.css";
import { AnimatedCircles } from "../../components/animatedCircles/AnimatedCircles.jsx";
import { Circle } from "../../components/circleForBackground/Circle.tsx";
import { useSpring, animated } from "@react-spring/web";
import Confetti from "react-confetti";
export const CorrectAnswer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();

  const props = useSpring({
    from: { transform: "scale(1)" },
    to: [{ transform: "scale(1.1)" }, { transform: "scale(1)" }],
    config: {
      tension: 400,
      mass: 5,
      duration: 800,
    },
    loop: true,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setLocation("/"), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={"container"}>
      <img alt={"edurino"} className={"logo"} src={EdurinoLogo} />
      <h1 className={"title"}>Excellent!</h1>
      <div className={"content-container"}>
        <img alt={"second"} src={SecondChar} className={"char-left"} />
        <div className={"box"}>
          <animated.button style={props} className={"voucher"} onClick={() => setLocation("/")}>
            Get a <span>20%</span> voucher
            <img className={"qr-code"} alt={"qr"} src={QR} />
          </animated.button>
        </div>
        <img alt={"fox"} src={Fox} className={"char-right"} />
      </div>
      <AnimatedCircles pageNum={3} />
      <Circle width={800} height={800} top={0} right={0} transform={"translate(50%, -50%)"} />
      <Circle width={500} height={500} top={0} left={0} transform={"translate(-50%,-50%)"} />
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
    </div>
  );
};
