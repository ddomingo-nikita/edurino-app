import "./first-task.css";
import { useLocation } from "wouter";
import SecondChar from "../../assets/characters/second_char.svg";
import { AnimatedCircles } from "../../components/animatedCircles/AnimatedCircles.jsx";
import { Circle } from "../../components/circleForBackground/Circle.tsx";
import React, { useEffect, useState } from "react";
import shuffle from "lodash.shuffle";
const createTask = () => {
  const t = `${Math.ceil(Math.random() * 1000) % 10}${["-", "+"][Math.ceil(Math.random() * 10) % 2]}${Math.ceil(Math.random() * 1000) % 10}`;
  const correctAnswer = eval(t);
  const allVars = [
    Math.ceil(Math.random() * 100) - correctAnswer,
    Math.ceil(Math.random() * 100) - correctAnswer,
    correctAnswer,
  ];

  return { task: t, correctAnswer: correctAnswer, allVars: allVars };
};

export const FirstTask = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [task, setTask] = useState(createTask());

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(shuffle(task.allVars));
  }, [task]);

  const onIncorrectAnswerClickHandler = (e) => {
    setLocation(`/demo-game/incorrect/${e.target.name}`);
  };

  return (
    <div className={"game-container"}>
      <h1 className={"title"}>Can you solve it?</h1>
      <div className={"task-box"}>
        <h1 className={"equation"}>{task.task} =</h1>
        <div className={"solutions"}>
          {answers.map((answer, index) =>
            answer === task.correctAnswer ? (
              <button className={"solution"} onClick={() => setLocation("/correct")}>
                {answer}
              </button>
            ) : (
              <button className={"solution"} name={`${index % 2}`} onClick={onIncorrectAnswerClickHandler}>
                {answer}
              </button>
            ),
          )}
        </div>
      </div>
      <img alt={"sec_char"} src={SecondChar} className={"char-left"} />
      <AnimatedCircles pageNum={1} />
      <Circle width={442} height={442} bottom={0} right={0} transform={"translate(-70%,80%)"} />
      <Circle width={500} height={500} bottom={0} right={0} transform={"translate(50%,50%)"} />
    </div>
  );
};
